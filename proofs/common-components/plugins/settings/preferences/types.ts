//one saved choice; null means follow native browser/device localization
export type PreferenceChoice = { value: string | null, revision: number };

//configured translation catalog, serialized without server configuration
export type PreferenceLanguage = { locale: string, label: string };

//independent revisions prevent one card from overwriting the other card
export type PreferenceState = {
  language: PreferenceChoice,
  timeZone: PreferenceChoice
};

//public feature service; callers derive the profile ID from verified identity
export type PreferencesService = {
  ready(): boolean,
  read(profileId: string): Promise<PreferenceState>
};
