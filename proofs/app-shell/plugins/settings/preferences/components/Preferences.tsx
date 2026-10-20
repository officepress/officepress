//modules
import { useEffect, useMemo, useState } from 'react';

//client
import type { PreferenceLanguage } from '../types.js';
import { useLocalization } from './Provider.js';
import Card from './Card.js';

/**
 * Name a zone with its current offset while retaining its IANA option value.
 */
function zoneLabel(zone: string, now: Date) {
  const offset = new Intl.DateTimeFormat('en', {
    timeZone: zone,
    timeZoneName: 'longOffset'
  })
    .formatToParts(now)
    .find((part) => part.type === 'timeZoneName')?.value;
  return `(${offset}) ${zone.split('/').at(-1)?.replaceAll('_', ' ')}`;
};

/**
 * Show locale formatting and timezone previews using native JavaScript Intl.
 */
export default function Preferences({
  csrf,
  languages
}: {
  csrf: string,
  languages: PreferenceLanguage[]
}) {
  const { locale, timeZone, isReady } = useLocalization();
  const [ now, setNow ] = useState<Date>();
  const native = useMemo(
    () => (isReady ? Intl.DateTimeFormat().resolvedOptions() : null),
    [ isReady ]
  );
  const zones = useMemo(
    () =>
      !native
        ? []
        : [
            ...new Set([
              'UTC',
              native.timeZone,
              ...(timeZone ? [ timeZone ] : []),
              ...(Intl.supportedValuesOf?.('timeZone') || [])
            ])
          ]
            .sort()
            .map((zone) => ({
              value: zone,
              label: zoneLabel(zone, now || new Date())
            })),
    [ native, timeZone, now ]
  );
  const languageOptions = useMemo(
    () =>
      languages.map((language) => ({
        value: language.locale,
        label:
          new Intl.DisplayNames([ language.locale ], { type: 'language' }).of(
            language.locale
          ) || language.label
      })),
    [ languages ]
  );

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Card
        section="language"
        title="Language"
        csrf={csrf}
        badge="Browser default"
        defaultLabel={
          native
            ? new Intl.DisplayNames([ native.locale ], { type: 'language' }).of(
                native.locale
              ) || native.locale
            : 'Browser default'
        }
        description="Choose the language OfficePress uses for menus, dates and numbers. It follows your browser until you pick one."
        help={
          native
            ? `Detected from your browser as ${native.locale}. Dates, times and numbers use this language’s formats.`
            : 'Detecting browser language…'
        }
        options={languageOptions}
        preview={(value) => {
          if (!now || !native) return <p>Detecting browser settings…</p>;
          const previewLocale = value || native.locale;
          return (
            <dl className="preference-samples">
              <div>
                <dt>Date</dt>
                <dd>
                  {new Intl.DateTimeFormat(previewLocale, {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    timeZone
                  }).format(now)}
                </dd>
              </div>
              <div>
                <dt>Relative</dt>
                <dd>
                  {new Intl.RelativeTimeFormat(previewLocale).format(
                    -2,
                    'minute'
                  )}
                </dd>
              </div>
              <div>
                <dt>Number</dt>
                <dd>
                  {new Intl.NumberFormat(previewLocale).format(1234567.89)}
                </dd>
              </div>
            </dl>
          );
        }}
      />
      <Card
        section="timeZone"
        title="Time zone"
        csrf={csrf}
        badge="Device default"
        defaultLabel={
          native
            ? zoneLabel(native.timeZone, now || new Date())
            : 'Device default'
        }
        description="Choose the clock OfficePress uses for times, due dates and reminders. It follows your device until you pick one."
        help={
          native
            ? `Detected from your device as ${native.timeZone}. Due times, SLA targets and notifications use this zone.`
            : 'Detecting device time zone…'
        }
        options={zones}
        preview={(value) => {
          if (!now || !native) return <p>Detecting browser settings…</p>;
          const zone = value || native.timeZone;
          const clock = new Intl.DateTimeFormat(locale, {
            timeStyle: 'short',
            timeZone: zone
          });
          const offset = new Intl.DateTimeFormat(locale, {
            timeZone: zone,
            timeZoneName: 'longOffset'
          })
            .formatToParts(now)
            .find((part) => part.type === 'timeZoneName')?.value;
          return (
            <dl className="preference-samples">
              <div>
                <dt>Current time</dt>
                <dd>{clock.format(now)}</dd>
              </div>
              <div>
                <dt>Offset</dt>
                <dd>{offset}</dd>
              </div>
              <div>
                <dt>Due date</dt>
                <dd>
                  {new Intl.DateTimeFormat(locale, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                    timeZone: zone
                  }).format(new Date(now.getTime() + 3 * 86400000))}
                </dd>
              </div>
            </dl>
          );
        }}
      />
    </>
  );
};
