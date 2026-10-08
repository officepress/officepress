import assert from "node:assert/strict";
import type Engine from "@stackpress/inquire/Engine";
import { readTheme, saveTheme } from "../domain.js";
import { contrast, defaults, validateTheme, foreground } from "../client.js";
import { families } from "../families.js";
export async function themeContracts(db: Engine) {
  for (const family of Object.values(families))
    for (const mode of [family.light, family.dark]) {
      assert.ok(contrast(mode.text, mode.canvas) >= 4.6);
      assert.ok(contrast(mode["accent-text"], mode.surface) >= 4.5);
    }
  const original = defaults("operate");
  assert.throws(() =>
    validateTheme({ ...original, logo: "https://evil.test/logo.svg" }),
  );
  assert.throws(() => validateTheme({ ...original, accent: "red" }));
  assert.ok(contrast(foreground("#DDEEFF"), "#DDEEFF") >= 4.6);
  await saveTheme(
    db,
    "theme-contract",
    { ...original, brand: "Only this app" },
    0,
  );
  assert.equal(
    (await readTheme(db, "theme-contract", "operate")).theme.brand,
    "Only this app",
  );
  assert.equal((await readTheme(db, "other-app", "operate")).revision, 0);
  await assert.rejects(
    saveTheme(db, "theme-contract", { ...original, brand: "Stale" }, 0),
  );
  assert.equal(
    (await readTheme(db, "theme-contract", "operate")).theme.brand,
    "Only this app",
  );
  await assert.rejects(saveTheme(db, "missing-app", original, 9));
  return [
    "All eight exact family palettes meet body/accent contrast checks",
    "Invalid theme values rejected with derived legible foregrounds",
    "Theme saves are app-scoped and stale revisions cannot overwrite or recreate",
  ];
}
