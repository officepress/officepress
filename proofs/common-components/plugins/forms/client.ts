//client
import type { Field, FieldType, FormDefinition } from './types.js';

//--------------------------------------------------------------------//
// Constants

//question kinds, palette labels and icons shared by form editors
export const catalogue: { type: FieldType, label: string, icon: string }[] = [
  { type: 'short', label: 'Short', icon: 'text-cursor-input' },
  { type: 'long', label: 'Long', icon: 'pilcrow' },
  { type: 'choice', label: 'Choice', icon: 'circle-dot' },
  { type: 'checkboxes', label: 'Checkboxes', icon: 'square-check' },
  { type: 'dropdown', label: 'Dropdown', icon: 'circle-chevron-down' },
  { type: 'date', label: 'Date', icon: 'calendar' },
  { type: 'number', label: 'Number', icon: 'hash' }
];

//human-readable field names shared by question settings and preview
// controls
export const typeLabels: Record<FieldType, string> = {
  short: 'Short answer',
  long: 'Long answer',
  choice: 'Multiple choice',
  checkboxes: 'Checkboxes',
  dropdown: 'Dropdown',
  date: 'Date',
  number: 'Number'
};

//--------------------------------------------------------------------//
// Functions

/**
 * Create a question with stable identity and defaults for its field type.
 */
export function newField(type: FieldType, index: number): Field {
  const suffix = crypto.randomUUID().replaceAll('-', '').slice(0, 8);
  return {
    id: crypto.randomUUID(),
    name: `question_${suffix}`,
    label: `Question ${index + 1}`,
    type,
    required: false,
    help: '',
    placeholder: '',
    options: [ 'Option 1', 'Option 2' ]
  };
};

/**
 * Validate submitted values against the frozen published question
 * definitions.
 */
export function validateAnswers(definition: FormDefinition, raw: unknown) {
  const errors: Record<string, string> = {};
  const answers: Record<string, string | string[]> = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw))
    return { errors: { _form: 'Enter your answers.' }, answers };
  const data = raw as Record<string, unknown>;
  //submitted keys must belong to this frozen publication, including
  // optional fields
  const known = new Set(
    definition.fields.map((candidateField) => candidateField.name)
  );
  if (Object.keys(data).some((key) => !known.has(key)))
    errors._form = 'An answer does not match this form version.';
  for (const candidateField of definition.fields) {
    let value = data[candidateField.name];
    if (value == null) value = candidateField.type === 'checkboxes' ? [] : '';
    //checkboxes submit arrays; handle them before scalar validation
    if (candidateField.type === 'checkboxes') {
      if (
        !Array.isArray(value) ||
        value.some(
          (answerValue) =>
            typeof answerValue !== 'string' ||
            !candidateField.options.includes(answerValue)
        ) ||
        new Set(value).size !== value.length
      ) {
        errors[candidateField.name] = 'Select valid options.';
        continue;
      }
      answers[candidateField.name] = value as string[];
      if (candidateField.required && !value.length)
        errors[candidateField.name] = 'Choose at least one option.';
      continue;
    }
    //reject oversized or non-text scalars before trimming and type checks
    if (
      typeof value !== 'string' ||
      value.length > (candidateField.type === 'long' ? 10000 : 1000)
    ) {
      errors[candidateField.name] = 'Enter a valid answer.';
      continue;
    }
    value = value.trim();
    answers[candidateField.name] = value as string;
    if (candidateField.required && !value) {
      errors[candidateField.name] = 'This answer is required.';
      continue;
    }
    //optional blank answers are valid; nonblank answers must match the
    // field type
    if (!value) continue;
    if (
      [ 'choice', 'dropdown' ].includes(candidateField.type) &&
      !candidateField.options.includes(value as string)
    )
      errors[candidateField.name] = 'Select an available option.';
    if (candidateField.type === 'number' && !Number.isFinite(Number(value)))
      errors[candidateField.name] = 'Enter a valid number.';
    //round-trip dates to reject normalized invalid days such as February 30
    if (
      candidateField.type === 'date' &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(value as string) ||
        Number.isNaN(Date.parse(value as string)) ||
        new Date(value as string).toISOString().slice(0, 10) !== value)
    )
      errors[candidateField.name] = 'Enter a valid date.';
  }
  return { errors, answers };
};

/**
 * Validate the form definition before saving or publication.
 */
export function validateDefinition(raw: unknown): FormDefinition {
  const draft = raw as FormDefinition;
  if (
    !draft ||
    typeof draft.title !== 'string' ||
    !draft.title.trim() ||
    draft.title.length > 160
  )
    throw Error('Give the form a title of up to 160 characters.');
  if (
    ![ 'signedin', 'public' ].includes(draft.mode) ||
    typeof draft.description !== 'string' ||
    draft.description.length > 2000 ||
    typeof draft.expires !== 'string' ||
    (draft.expires && !/^\d{4}-\d{2}-\d{2}T/.test(draft.expires))
  )
    throw Error('Invalid form settings.');
  if (draft.expires && Number.isNaN(Date.parse(draft.expires)))
    throw Error('Invalid expiration date.');
  if (
    !Array.isArray(draft.fields) ||
    !draft.fields.length ||
    draft.fields.length > 40
  )
    throw Error('Add between 1 and 40 questions.');
  //stable, unique names become answer keys and must not target object
  // prototypes
  const ids = new Set();
  const names = new Set();
  for (const candidateField of draft.fields) {
    if (
      !candidateField ||
      typeof candidateField.id !== 'string' ||
      candidateField.id.length > 80 ||
      !candidateField.id ||
      ids.has(candidateField.id) ||
      typeof candidateField.name !== 'string' ||
      !/^[_a-zA-Z][_a-zA-Z0-9]{0,63}$/.test(candidateField.name) ||
      names.has(candidateField.name) ||
      [ '__proto__', 'prototype', 'constructor' ].includes(candidateField.name)
    )
      throw Error('Questions need unique stable IDs and field names.');
    ids.add(candidateField.id);
    names.add(candidateField.name);
    //each question must match a supported renderer and bounded display text
    if (
      !catalogue.some((fieldKind) => fieldKind.type === candidateField.type) ||
      typeof candidateField.label !== 'string' ||
      !candidateField.label.trim() ||
      candidateField.label.length > 300 ||
      typeof candidateField.required !== 'boolean' ||
      typeof candidateField.help !== 'string' ||
      candidateField.help.length > 1000 ||
      typeof candidateField.placeholder !== 'string' ||
      candidateField.placeholder.length > 300
    )
      throw Error('Invalid question settings.');
    //copy only valid, unique options; answer validation later uses this
    // snapshot
    if (
      !Array.isArray(candidateField.options) ||
      candidateField.options.some(
        (option) =>
          typeof option !== 'string' || !option.trim() || option.length > 160
      ) ||
      candidateField.options.length > 30 ||
      new Set(candidateField.options).size !== candidateField.options.length
    )
      throw Error('Options must be unique, non-empty text.');
    if (
      [ 'choice', 'checkboxes', 'dropdown' ].includes(candidateField.type) &&
      !candidateField.options.length
    )
      throw Error('Choice questions need options.');
  }
  //return a fresh allowlisted definition rather than persisting arbitrary
  // input
  return {
    title: draft.title.trim(),
    description: draft.description,
    mode: draft.mode,
    expires: draft.expires,
    fields: draft.fields.map((candidateField) => ({
      id: candidateField.id,
      name: candidateField.name,
      label: candidateField.label.trim(),
      type: candidateField.type,
      required: candidateField.required,
      help: candidateField.help,
      placeholder: candidateField.placeholder,
      options: [ ...candidateField.options ]
    }))
  };
};
