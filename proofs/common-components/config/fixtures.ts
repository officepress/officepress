// Public sample data for explicitly disposable development databases only.
export const fixturePassword = "OfficePress-proof-123!";
export const fixtureAccounts = [
  { name: "Alex Morgan", email: "admin@officepress.test", username: "admin", roles: ["ADMIN"] },
  { name: "Sam Rivera", email: "member@officepress.test", username: "member", roles: ["MEMBER"] },
  { name: "Jordan Lee", email: "other@officepress.test", username: "other", roles: ["MEMBER"] },
  { name: "Read Only", email: "readonly@officepress.test", username: "readonly", roles: ["READONLY"] },
  { name: "Removal Fixture", email: "removal@officepress.test", username: "removal", roles: ["MEMBER"] },
];
export const componentFixtures = [
  "workflows", "automations", "templates", "forms", "chat", "requests",
] as const;
export type ComponentPopulate = {
  accounts: typeof fixtureAccounts;
  components: string[];
};
