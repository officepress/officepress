//modules
import semver from 'semver';

//--------------------------------------------------------------------//
// Types

//GitHub release metadata narrowed before version selection
export type Release = {
  tag_name: string,
  body: string | null,
  html_url: string,
  draft: boolean,
  prerelease: boolean
};

//installed/eligible release comparison and its cache/failure state
export type ReleaseResult = {
  state: 'current' | 'available' | 'unavailable' | 'error',
  installed: string,
  tag?: string,
  url?: string,
  instructions?: string,
  body?: string,
  checkedAt: string,
  cached: boolean,
  source: string,
  message?: string
};

//--------------------------------------------------------------------//
// Functions

/**
 * Select an eligible release using the configured version and prerelease
 * policy.
 */
export function selectRelease(
  releases: Release[],
  installed: string,
  source: string,
  now = new Date().toISOString()
): ReleaseResult {
  const base = { installed, source, checkedAt: now, cached: false };
  if (!semver.valid(installed))
    return {
      ...base,
      state: 'unavailable',
      message: 'Installed version is invalid.'
    };
  //ignore drafts, prereleases and malformed versions before choosing the
  // newest
  const candidates = releases.filter(
    (release) =>
      !release.draft &&
      !release.prerelease &&
      semver.valid(release.tag_name) &&
      !semver.prerelease(release.tag_name)
  );
  candidates.sort((leftRelease, rightRelease) =>
    semver.rcompare(leftRelease.tag_name, rightRelease.tag_name)
  );
  const release = candidates[0];
  if (!release)
    return {
      ...base,
      state: 'unavailable',
      message: 'No stable published release is available.'
    };
  const instructions = upgradeSection(release.body || '');
  //publisher links must stay on the expected GitHub release URL shape
  const safeURL = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/releases\//.test(
    release.html_url
  )
    ? release.html_url
    : undefined;
  if (!safeURL)
    return {
      ...base,
      state: 'unavailable',
      message: 'Release source link is invalid.'
    };
  return {
    ...base,
    state: semver.gt(release.tag_name, installed) ? 'available' : 'current',
    tag: release.tag_name,
    url: safeURL,
    body: release.body || '',
    instructions: instructions || undefined,
    message: instructions
      ? undefined
      : 'Upgrade Instructions are unavailable in this release.'
  };
};

/**
 * Extract the authored upgrade guidance from the selected release notes.
 */
export function upgradeSection(markdown: string): string | null {
  const lines = markdown.match(/.*(?:\r?\n|$)/g)?.filter(Boolean) || [];
  //headings inside fenced examples are content, not section boundaries
  let fence = '';
  let level = 0;
  let start = -1;
  for (let segmentIndex = 0; segmentIndex < lines.length; segmentIndex++) {
    const line = lines[segmentIndex].replace(/\r?\n$/, '');
    const marker = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length)
        fence = '';
      continue;
    }
    if (fence) continue;
    //recognize both hash headings and underline headings without rendering
    // Markdown
    const headingMatch = /^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    const underline = /^ {0,3}(=+|-+)\s*$/.exec(
      (lines[segmentIndex + 1] || '').replace(/\r?\n$/, '')
    );
    const heading = headingMatch
      ? {
          level: headingMatch[1].length,
          title: headingMatch[2].trim(),
          skip: 0
        }
      : underline && line.trim()
        ? {
            level: underline[1][0] === '=' ? 1 : 2,
            title: line.trim(),
            skip: 1
          }
        : null;
    if (!heading) continue;
    //stop at the next peer or parent heading so unrelated notes are
    // excluded
    if (start >= 0 && heading.level <= level) {
      const text = lines.slice(start, segmentIndex).join('');
      return text.trim() ? text : null;
    }
    //start after the requested heading while retaining the authored body
    // text
    if (start < 0 && heading.title === 'Upgrade Instructions') {
      start = segmentIndex + 1 + heading.skip;
      level = heading.level;
    }
    segmentIndex += heading.skip;
  }
  const text = start < 0 ? '' : lines.slice(start).join('');
  return text.trim() ? text : null;
};

//--------------------------------------------------------------------//
// Classes

/**
 * Read and compare release metadata through the injected fetch boundary.
 */
export class GithubReleases {
  //state owned by this instance and read by its methods
  private cached?: ReleaseResult;
  //initialize the dependencies and state owned by this settings about
  // instance
  public constructor(
    //publisher repository used to retrieve release metadata
    public readonly repository: string,
    //installed version used to select eligible upgrades
    public readonly installed: string,
    //maximum age of the cached release result
    public readonly cacheMs: number
  ) {}
  //fetch release metadata and compare it against the configured installed
  // version
  public async check(shouldRefresh = false): Promise<ReleaseResult> {
    if (
      !shouldRefresh &&
      this.cached &&
      Date.now() - Date.parse(this.cached.checkedAt) < this.cacheMs
    )
      return { ...this.cached, cached: true };
    const source = `https://github.com/${this.repository}/releases`;
    try {
      if (!/^[\w.-]+\/[\w.-]+$/.test(this.repository))
        throw new Error('Invalid configured repository.');
      const response = await fetch(
        `https://api.github.com/repos/${this.repository}/releases?per_page=100`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'OfficePress-P01-proof'
          },
          signal: AbortSignal.timeout(15000)
        }
      );
      if (!response.ok)
        throw new Error(`GitHub check failed (${response.status}).`);
      const releases = (await response.json()) as Release[];
      if (!Array.isArray(releases))
        throw new Error('Invalid release response.');
      this.cached = selectRelease(releases, this.installed, source);
    } catch (caughtError) {
      this.cached = {
        state: 'error',
        installed: this.installed,
        source,
        checkedAt: new Date().toISOString(),
        cached: false,
        message:
          caughtError instanceof Error
            ? caughtError.message
            : 'Release check failed.'
      };
    }
    return this.cached;
  }
};
