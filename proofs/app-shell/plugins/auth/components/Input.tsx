//modules
import { useState } from 'react';

//client
import Icon from '../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//native input attributes plus the identity form label and validation
// message
type InputProps = {
  label: string,
  name: string,
  type?: string,
  value?: string,
  required?: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render an uncontrolled identity field with password visibility and browser
 * autofill hints.
 */
export default function Input({
  label,
  name,
  type = 'text',
  value,
  required = true
}: InputProps) {
  const [ isVisible, setIsVisible ] = useState(false);
  const icon =
    type === 'password'
      ? 'lock'
      : name === 'email'
        ? 'mail'
        : name === 'username'
          ? 'at-sign'
          : name === 'image'
            ? 'image'
            : name === 'code'
              ? 'shield-check'
              : 'user';
  return (
    <div className="op-field">
      <label className="op-field__label" htmlFor={`field-${name}`}>
        {label}
      </label>
      <div className="op-input-group">
        <Icon name={icon} />
        <input
          className="op-input"
          id={`field-${name}`}
          name={name}
          type={type === 'password' && isVisible ? 'text' : type}
          defaultValue={value}
          required={required}
          autoComplete={
            type === 'password'
              ? name === 'current' || label === 'Password'
                ? 'current-password'
                : 'new-password'
              : name === 'code'
                ? 'one-time-code'
                : name
          }
        />
        {type === 'password' && (
          <span className="op-input-group__end">
            <button
              className="op-icon-btn op-icon-btn--compact op-icon-btn--muted"
              type="button"
              aria-label={`${isVisible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
              onClick={() => setIsVisible(!isVisible)}
            >
              <Icon name={isVisible ? 'eye-off' : 'eye'} />
            </button>
          </span>
        )}
      </div>
    </div>
  );
};
