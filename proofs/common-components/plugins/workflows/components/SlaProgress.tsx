import { useEffect, useState } from "react";
import { slaProgress } from "../sla.js";

export default function SlaProgress({
  enteredAt,
  hours,
  showDue = false,
}: {
  enteredAt: number;
  hours: number;
  showDue?: boolean;
}) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    setNow(Date.now());
    if (hours <= 0) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [enteredAt, hours]);
  const progress = slaProgress(enteredAt, hours, now);
  if (progress === null) return null;
  const description = `${hours} hour time target · ${Math.round(progress)}% elapsed`;
  const due = new Date(enteredAt + hours * 3600000);
  const bar = (
    <div
      className={`op-progress op-progress--thin wf-sla ${progress >= 100 ? "op-progress--urgent" : ""}`}
      role="progressbar"
      aria-label="Stage time target"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-valuetext={description}
      title={description}
    >
      <div className="op-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
  if (!showDue) return bar;
  return (
    <div className="wf-sla-summary">
      <p className="op-small">
        Due{" "}
        <time dateTime={due.toISOString()}>
          {due.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
          })}
        </time>
      </p>
      {bar}
    </div>
  );
}
