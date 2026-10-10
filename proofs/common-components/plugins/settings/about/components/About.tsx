//modules
import { useState } from 'react';

//client
import type { ReleaseResult } from '../releases.js';
import { requestJson } from '../../../app/client.js';
import { Markdown } from './Markdown.js';
import Icon from '../../../app/components/Icon.js';

//--------------------------------------------------------------------//
// Types

//release metadata, CSRF and publisher configuration supplied by the About
// page
type AboutProps = {
  brand: string,
  logo: string,
  version: string,
  build: string,
  csrf: string,
  admin: boolean
};

//--------------------------------------------------------------------//
// Entry point

/**
 * Show installed version, authorized release checks and publisher upgrade
 * notes.
 */
export default function About({
  brand,
  logo,
  version,
  build,
  csrf,
  admin: isAdmin
}: AboutProps) {
  //--------------------------------------------------------------------//
  // State and lifecycle references

  const [ result, setResult ] = useState<ReleaseResult>();
  const [ isBusy, setIsBusy ] = useState(false);
  const [ error, setError ] = useState('');
  const [ isCopied, setIsCopied ] = useState(false);

  //--------------------------------------------------------------------//
  // Interaction handlers

  //request an authorized release refresh and expose provider failures
  // locally
  async function handleCheck() {
    setIsBusy(true);
    setError('');
    try {
      setResult(await requestJson('/api/about/check', {}, csrf));
    } catch (caughtError) {
      setError((caughtError as Error).message);
    } finally {
      setIsBusy(false);
    }
  }

  //--------------------------------------------------------------------//
  // Render or public hook result

  return (
    <>
      <section className="op-section">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title">Version and updates</h2>
            <p className="op-section__desc">
              Keep {brand} current with fixes and new features. Check for a
              release and follow the publisher’s upgrade instructions on your
              server.
            </p>
          </div>
        </div>
        <div className="op-section__body">
          <div className="op-item-row app-version">
            <span className="app-version-logo">
              <img src={logo} alt="" />
            </span>
            <div className="op-item-row__text">
              <strong>
                {brand} {version}
              </strong>
              <span className="op-small op-muted">Build {build}</span>
            </div>
            <span className="op-pill op-pill--neutral">
              <Icon name="check" />
              Installed
            </span>
          </div>
          <div
            className={`op-update ${result?.state === 'available' ? '' : 'op-update--current'}`}
            role="status"
          >
            <div className="op-update__main">
              <span className="op-update__icon">
                <Icon
                  name={
                    result?.state === 'available'
                      ? 'circle-arrow-up'
                      : result?.state === 'current'
                        ? 'circle-check'
                        : 'info'
                  }
                />
              </span>
              <div className="op-update__text">
                <strong>
                  {error
                    ? 'Unable to check for updates'
                    : !result
                      ? 'Check for the latest release'
                      : result.state === 'current'
                        ? 'You are up to date.'
                        : result.state === 'available'
                          ? `Version ${result.tag} is available.`
                          : 'Release information unavailable'}
                </strong>
                <span className="op-small op-muted">
                  {error ||
                    (!result
                      ? 'Check for updates to see published changes and upgrade instructions.'
                      : result.state === 'available'
                        ? 'Review the release notes and instructions below before upgrading.'
                        : result.state === 'current'
                          ? 'You are running the latest published version.'
                          : result.message)}
                </span>
              </div>
            </div>
            {result?.url && (
              <div className="op-update__alt">
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  View release on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="op-section__foot app-settings-footer">
          <span className="op-small">
            {result
              ? `${result.cached ? 'Cached check' : 'Last checked'} · ${new Date(result.checkedAt).toLocaleString()}`
              : isAdmin
                ? 'No update check yet'
                : 'An administrator can check for updates.'}
          </span>
          <button
            disabled={!isAdmin || isBusy}
            className="op-btn op-btn--secondary"
            onClick={handleCheck}
          >
            <Icon name="refresh-cw" />
            {isBusy ? 'Checking…' : 'Check for updates'}
          </button>
        </div>
      </section>
      {result?.state === 'available' && isAdmin && (
        <section className="op-section">
          <div className="op-section__head">
            <div>
              <h2 className="op-section__title">Upgrade Instructions</h2>
              <p className="op-section__desc">
                Installed {version} → {result.tag} ·{' '}
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  Release source
                </a>
              </p>
            </div>
          </div>
          <div className="op-section__body">
            {result.instructions ? (
              <Markdown text={result.instructions} />
            ) : (
              <p>{result.message}</p>
            )}
          </div>
          {result.instructions && (
            <div className="op-section__foot">
              <span className="op-small">Published instructions</span>
              <button
                className="op-btn op-btn--secondary"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(result.instructions!);
                    setIsCopied(true);
                  } catch {
                    setError(
                      'Clipboard unavailable. Select and copy the instructions.'
                    );
                  }
                }}
              >
                <Icon name="copy" />
                {isCopied ? 'Copied' : 'Copy instructions'}
              </button>
            </div>
          )}
        </section>
      )}
      <section className="op-section">
        <div className="op-section__head">
          <div>
            <h2 className="op-section__title">Change log</h2>
            <p className="op-section__desc">
              Release notes from the app publisher.
            </p>
          </div>
        </div>
        <div className="op-section__body">
          {result?.body ? (
            <div className="app-release-row">
              <div className="app-release-meta">
                <h3>{result.tag}</h3>
                <span className="op-pill op-pill--neutral">
                  {result.state === 'available'
                    ? 'Available'
                    : 'Latest release'}
                </span>
              </div>
              <Markdown text={result.body} />
            </div>
          ) : (
            <p className="op-small op-muted">
              Check for updates to see published changes.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
