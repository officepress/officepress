import semver from "semver";
export type Release = {
  tag_name: string;
  body: string | null;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
};
export type ReleaseResult = {
  state: "current" | "available" | "unavailable" | "error";
  installed: string;
  tag?: string;
  url?: string;
  instructions?: string;
  body?: string;
  checkedAt: string;
  cached: boolean;
  source: string;
  message?: string;
};
// Preserve the publisher's exact section bytes (including nested headings/code).
export function upgradeSection(markdown: string): string | null {
  const lines = markdown.match(/.*(?:\r?\n|$)/g)?.filter(Boolean) || [];
  let fence = "",
    level = 0,
    start = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\r?\n$/, "");
    const marker = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length)
        fence = "";
      continue;
    }
    if (fence) continue;
    const atx = /^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    const underline = /^ {0,3}(=+|-+)\s*$/.exec(
      (lines[i + 1] || "").replace(/\r?\n$/, ""),
    );
    const heading = atx
      ? { level: atx[1].length, title: atx[2].trim(), skip: 0 }
      : underline && line.trim()
        ? {
            level: underline[1][0] === "=" ? 1 : 2,
            title: line.trim(),
            skip: 1,
          }
        : null;
    if (!heading) continue;
    if (start >= 0 && heading.level <= level) {
      const text = lines.slice(start, i).join("");
      return text.trim() ? text : null;
    }
    if (start < 0 && heading.title === "Upgrade Instructions") {
      start = i + 1 + heading.skip;
      level = heading.level;
    }
    i += heading.skip;
  }
  const text = start < 0 ? "" : lines.slice(start).join("");
  return text.trim() ? text : null;
}
export function selectRelease(
  releases: Release[],
  installed: string,
  source: string,
  now = new Date().toISOString(),
): ReleaseResult {
  const base = { installed, source, checkedAt: now, cached: false };
  if (!semver.valid(installed))
    return {
      ...base,
      state: "unavailable",
      message: "Installed version is invalid.",
    };
  const candidates = releases.filter(
    (r) =>
      !r.draft &&
      !r.prerelease &&
      semver.valid(r.tag_name) &&
      !semver.prerelease(r.tag_name),
  );
  candidates.sort((a, b) => semver.rcompare(a.tag_name, b.tag_name));
  const release = candidates[0];
  if (!release)
    return {
      ...base,
      state: "unavailable",
      message: "No stable published release is available.",
    };
  const instructions = upgradeSection(release.body || "");
  const safeURL = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/releases\//.test(
    release.html_url,
  )
    ? release.html_url
    : undefined;
  if (!safeURL)
    return {
      ...base,
      state: "unavailable",
      message: "Release source link is invalid.",
    };
  return {
    ...base,
    state: semver.gt(release.tag_name, installed) ? "available" : "current",
    tag: release.tag_name,
    url: safeURL,
    body: release.body || "",
    instructions: instructions || undefined,
    message: instructions
      ? undefined
      : "Upgrade Instructions are unavailable in this release.",
  };
}
export class GithubReleases {
  private cached?: ReleaseResult;
  constructor(
    readonly repository: string,
    readonly installed: string,
    readonly cacheMs: number,
  ) {}
  async check(force = false): Promise<ReleaseResult> {
    if (
      !force &&
      this.cached &&
      Date.now() - Date.parse(this.cached.checkedAt) < this.cacheMs
    )
      return { ...this.cached, cached: true };
    const source = `https://github.com/${this.repository}/releases`;
    try {
      if (!/^[\w.-]+\/[\w.-]+$/.test(this.repository))
        throw new Error("Invalid configured repository.");
      const response = await fetch(
        `https://api.github.com/repos/${this.repository}/releases?per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "OfficePress-P01-proof",
          },
          signal: AbortSignal.timeout(15000),
        },
      );
      if (!response.ok)
        throw new Error(`GitHub check failed (${response.status}).`);
      const releases = (await response.json()) as Release[];
      if (!Array.isArray(releases))
        throw new Error("Invalid release response.");
      this.cached = selectRelease(releases, this.installed, source);
    } catch (e) {
      this.cached = {
        state: "error",
        installed: this.installed,
        source,
        checkedAt: new Date().toISOString(),
        cached: false,
        message: e instanceof Error ? e.message : "Release check failed.",
      };
    }
    return this.cached;
  }
}
