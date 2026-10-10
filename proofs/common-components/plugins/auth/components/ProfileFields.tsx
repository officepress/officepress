//client
import type { Result } from './types.js';
import Input from './Input.js';

//--------------------------------------------------------------------//
// Types

//editable profile defaults and field-level errors supplied by the auth page
type ProfileFieldsProps = {
  result: Result,
  name?: string,
  emailFirst?: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Render editable profile and sign-in method fields from the framework
 * result.
 */
export default function ProfileFields({
  result,
  name = result.name,
  emailFirst: isEmailFirst = false
}: ProfileFieldsProps) {
  const email = (
    <Input
      label="Email address"
      name="email"
      type="email"
      value={result.auth?.email?.token}
      required={false}
    />
  );
  const username = (
    <Input
      label="Username"
      name="username"
      value={result.auth?.username?.token}
      required={false}
    />
  );
  return (
    <>
      <Input label="Name" name="name" value={name} />
      <Input
        label="Image URL"
        name="image"
        type="url"
        value={result.image || ''}
        required={false}
      />
      {isEmailFirst ? email : username}
      {isEmailFirst ? username : email}
      <Input
        label="Current password (when adding a sign-in method)"
        name="current"
        type="password"
        required={false}
      />
    </>
  );
};
