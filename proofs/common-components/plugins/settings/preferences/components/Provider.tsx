//modules
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { LanguageConfig } from 'stackpress-language/types';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { R22nProvider } from 'r22n';

//client
import type { PreferenceState } from '../types.js';

//safe saved choices plus native defaults shared by previews and app dates
type Localization = {
  preferences: PreferenceState,
  setPreferences: Dispatch<SetStateAction<PreferenceState>>,
  locale?: string,
  timeZone?: string,
  isReady: boolean,
  formatDate(
    date: string | number | Date,
    options?: Intl.DateTimeFormatOptions
  ): string
};

//automatic choices must remain automatic instead of freezing a detected value
const defaults: PreferenceState = {
  language: { value: null, revision: 0 },
  timeZone: { value: null, revision: 0 }
};
const LocalizationContext = createContext<Localization>({
  preferences: defaults,
  setPreferences: () => {},
  isReady: false,
  formatDate: () => '—'
});

/**
 * Read effective localization without global mutable state or browser storage.
 */
export function useLocalization() {
  return useContext(LocalizationContext);
};

/**
 * Resolve account overrides after hydration and select available translations.
 */
export default function LocalizationProvider({
  initial,
  language,
  children
}: {
  initial?: PreferenceState,
  language?: LanguageConfig,
  children: ReactNode
}) {
  const [ preferences, setPreferences ] = useState(initial || defaults);
  const [ native, setNative ] = useState<{
    locale: string,
    timeZone: string
  }>();
  const locale = preferences.language.value || native?.locale;
  const timeZone = preferences.timeZone.value || native?.timeZone;
  const isReady = !!native;
  const catalogs = language?.languages || {};
  const catalogKey =
    Object.keys(catalogs).find(
      (key) => key.replaceAll('_', '-') === locale
    ) ||
    language?.locale ||
    'en_US';
  const catalog = catalogs[catalogKey];
  const formatDate = useCallback(
    (
      date: string | number | Date,
      options: Intl.DateTimeFormatOptions = {}
    ) =>
      isReady
        ? new Intl.DateTimeFormat(locale, { ...options, timeZone }).format(
            new Date(date)
          )
        : '—',
    [ isReady, locale, timeZone ]
  );

  useEffect(() => {
    setNative(Intl.DateTimeFormat().resolvedOptions());
  }, []);
  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [ locale ]);

  return (
    <LocalizationContext.Provider
      value={{
        preferences,
        setPreferences,
        locale,
        timeZone,
        isReady,
        formatDate
      }}
    >
      <R22nProvider
        language={catalog?.label || 'EN'}
        translations={catalog?.translations || {}}
      >
        {children}
      </R22nProvider>
    </LocalizationContext.Provider>
  );
};
