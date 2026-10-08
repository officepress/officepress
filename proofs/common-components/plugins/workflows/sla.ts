/** Elapsed share of the current stage's SLA, from entry to expiry. */
export function slaProgress(enteredAt: number, hours: number, now: number) {
  if (!Number.isFinite(hours) || hours <= 0 || !Number.isFinite(enteredAt))
    return null;
  return Math.min(
    100,
    Math.max(0, ((now - enteredAt) / (hours * 3600000)) * 100),
  );
}
