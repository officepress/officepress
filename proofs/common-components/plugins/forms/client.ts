import type { Field, FieldType, FormDefinition } from "./types.js";
export const catalogue: { type: FieldType; label: string; icon: string }[] = [
  { type: "short", label: "Short", icon: "text-cursor-input" },
  { type: "long", label: "Long", icon: "pilcrow" },
  { type: "choice", label: "Choice", icon: "circle-dot" },
  { type: "checkboxes", label: "Checkboxes", icon: "square-check" },
  { type: "dropdown", label: "Dropdown", icon: "circle-chevron-down" },
  { type: "date", label: "Date", icon: "calendar" },
  { type: "number", label: "Number", icon: "hash" },
];
export const typeLabels: Record<FieldType, string> = {
  short: "Short answer",
  long: "Long answer",
  choice: "Multiple choice",
  checkboxes: "Checkboxes",
  dropdown: "Dropdown",
  date: "Date",
  number: "Number",
};
export function newField(type: FieldType, index: number): Field {
  const suffix = crypto.randomUUID().replaceAll("-", "").slice(0, 8);
  return {
    id: crypto.randomUUID(),
    name: `question_${suffix}`,
    label: `Question ${index + 1}`,
    type,
    required: false,
    help: "",
    placeholder: "",
    options: ["Option 1", "Option 2"],
  };
}
export function validateDefinition(raw: unknown): FormDefinition {
  const d = raw as FormDefinition;
  if (
    !d ||
    typeof d.title !== "string" ||
    !d.title.trim() ||
    d.title.length > 160
  )
    throw Error("Give the form a title of up to 160 characters.");
  if (
    !["signedin", "public"].includes(d.mode) ||
    typeof d.description !== "string" ||
    d.description.length > 2000 ||
    typeof d.expires !== "string" ||
    (d.expires && !/^\d{4}-\d{2}-\d{2}T/.test(d.expires))
  )
    throw Error("Invalid form settings.");
  if (d.expires && Number.isNaN(Date.parse(d.expires)))
    throw Error("Invalid expiration date.");
  if (!Array.isArray(d.fields) || !d.fields.length || d.fields.length > 40)
    throw Error("Add between 1 and 40 questions.");
  const ids = new Set(),
    names = new Set();
  for (const f of d.fields) {
    if (
      !f ||
      typeof f.id !== "string" ||
      f.id.length > 80 ||
      !f.id ||
      ids.has(f.id) ||
      typeof f.name !== "string" ||
      !/^[_a-zA-Z][_a-zA-Z0-9]{0,63}$/.test(f.name) ||
      names.has(f.name) ||
      ["__proto__", "prototype", "constructor"].includes(f.name)
    )
      throw Error("Questions need unique stable IDs and field names.");
    ids.add(f.id);
    names.add(f.name);
    if (
      !catalogue.some((c) => c.type === f.type) ||
      typeof f.label !== "string" ||
      !f.label.trim() ||
      f.label.length > 300 ||
      typeof f.required !== "boolean" ||
      typeof f.help !== "string" ||
      f.help.length > 1000 ||
      typeof f.placeholder !== "string" ||
      f.placeholder.length > 300
    )
      throw Error("Invalid question settings.");
    if (
      !Array.isArray(f.options) ||
      f.options.some(
        (v) => typeof v !== "string" || !v.trim() || v.length > 160,
      ) ||
      f.options.length > 30 ||
      new Set(f.options).size !== f.options.length
    )
      throw Error("Options must be unique, non-empty text.");
    if (
      ["choice", "checkboxes", "dropdown"].includes(f.type) &&
      !f.options.length
    )
      throw Error("Choice questions need options.");
  }
  return {
    title: d.title.trim(),
    description: d.description,
    mode: d.mode,
    expires: d.expires,
    fields: d.fields.map((f) => ({
      id: f.id,
      name: f.name,
      label: f.label.trim(),
      type: f.type,
      required: f.required,
      help: f.help,
      placeholder: f.placeholder,
      options: [...f.options],
    })),
  };
}
export function validateAnswers(definition: FormDefinition, raw: unknown) {
  const errors: Record<string, string> = {},
    answers: Record<string, string | string[]> = {};
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    return { errors: { _form: "Enter your answers." }, answers };
  const data = raw as Record<string, unknown>,
    known = new Set(definition.fields.map((f) => f.name));
  if (Object.keys(data).some((key) => !known.has(key)))
    errors._form = "An answer does not match this form version.";
  for (const f of definition.fields) {
    let value = data[f.name];
    if (value == null) value = f.type === "checkboxes" ? [] : "";
    if (f.type === "checkboxes") {
      if (
        !Array.isArray(value) ||
        value.some((v) => typeof v !== "string" || !f.options.includes(v)) ||
        new Set(value).size !== value.length
      ) {
        errors[f.name] = "Select valid options.";
        continue;
      }
      answers[f.name] = value as string[];
      if (f.required && !value.length)
        errors[f.name] = "Choose at least one option.";
      continue;
    }
    if (
      typeof value !== "string" ||
      value.length > (f.type === "long" ? 10000 : 1000)
    ) {
      errors[f.name] = "Enter a valid answer.";
      continue;
    }
    value = value.trim();
    answers[f.name] = value as string;
    if (f.required && !value) {
      errors[f.name] = "This answer is required.";
      continue;
    }
    if (!value) continue;
    if (
      ["choice", "dropdown"].includes(f.type) &&
      !f.options.includes(value as string)
    )
      errors[f.name] = "Select an available option.";
    if (f.type === "number" && !Number.isFinite(Number(value)))
      errors[f.name] = "Enter a valid number.";
    if (
      f.type === "date" &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(value as string) ||
        Number.isNaN(Date.parse(value as string)) ||
        new Date(value as string).toISOString().slice(0, 10) !== value)
    )
      errors[f.name] = "Enter a valid date.";
  }
  return { errors, answers };
}
