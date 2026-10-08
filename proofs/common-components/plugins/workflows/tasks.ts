import { createHash } from "node:crypto";
import type { Card, StageTask, Task } from "./types.js";

/** Stable compatibility identities for stored stage definitions that used strings. */
export function readStageTasks(
  stageId: string,
  tasks: (StageTask | string)[],
): StageTask[] {
  const occurrences = new Map<string, number>();
  return tasks.map((task) => {
    if (typeof task !== "string") return task;
    const count = occurrences.get(task) || 0;
    occurrences.set(task, count + 1);
    const hash = createHash("sha256")
      .update(JSON.stringify([stageId, task, count]))
      .digest("hex")
      .slice(0, 24);
    return { id: `legacy-${hash}`, title: task };
  });
}

/** Stage definitions determine the active checklist; stored tasks supply completion. */
export function projectCard(card: Card): Card {
  const stage = card.workflow.stages.find((item) => item.id === card.stageId);
  const used = new Set<string>();
  const automation = card.tasks.filter((task) =>
    task.automation
      ? task.automation.stageId === card.stageId &&
        task.automation.enteredAt === card.enteredAt
      : card.effects.includes(task.id),
  );
  const tasks: Task[] = (stage?.tasks || []).map((definition) => {
    const previous = card.tasks.find(
      (task) =>
        !used.has(task.id) &&
        !automation.includes(task) &&
        (task.definitionId === definition.id ||
          (!task.definitionId &&
            !task.automation &&
            task.title === definition.title)),
    );
    if (previous) used.add(previous.id);
    return {
      id: previous?.id || `stage:${stage!.id}:${definition.id}`,
      definitionId: definition.id,
      title: definition.title,
      done: previous?.done || false,
    };
  });
  return {
    ...card,
    tasks: [
      ...tasks,
      ...automation.map((task) => ({
        ...task,
        automation: { stageId: card.stageId, enteredAt: card.enteredAt },
      })),
    ],
  };
}
