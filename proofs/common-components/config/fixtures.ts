//--------------------------------------------------------------------//
// Types

//repeatable component fixture input for the populate lifecycle
export type ComponentPopulate = {
  accounts: typeof fixtureAccounts,
  components: string[]
};

//--------------------------------------------------------------------//
// Constants

//repeatable component fixtures used only by the development populate event
export const componentFixtures = [
  'workflows',
  'automations',
  'templates',
  'forms',
  'chat',
  'requests'
] as const;

//disposable proof accounts used by repeatable identity population
export const fixtureAccounts = [
  {
    name: 'Alex Morgan',
    email: 'admin@officepress.test',
    username: 'admin',
    roles: [ 'ADMIN' ]
  },
  {
    name: 'Sam Rivera',
    email: 'member@officepress.test',
    username: 'member',
    roles: [ 'MEMBER' ]
  },
  {
    name: 'Jordan Lee',
    email: 'other@officepress.test',
    username: 'other',
    roles: [ 'MEMBER' ]
  },
  {
    name: 'Read Only',
    email: 'readonly@officepress.test',
    username: 'readonly',
    roles: [ 'READONLY' ]
  },
  {
    name: 'Removal Fixture',
    email: 'removal@officepress.test',
    username: 'removal',
    roles: [ 'MEMBER' ]
  }
];

//public sample data for explicitly disposable development databases only
export const fixturePassword = 'OfficePress-proof-123!';
