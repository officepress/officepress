# OfficePress Pipelines — user-supplied description

Owner: [current product catalogue](../context/products.md). Load when planning `operate-pipelines` or distinguishing its cross-app process map from an individual app's workflow board.

Provenance: the user's 2026-10-13 message, with its full wording retained below. The new [`officepress/operate-pipelines` repository](https://github.com/officepress/operate-pipelines) was confirmed on 2026-10-13 and had no committed contents at the time of this check. The description defines intended product scope, not implemented or deployed behavior.

## Product meaning and workflow

Pipelines is a command room for a business process across back-office apps. Users define a living map of nodes representing any stage, team, system or decision point that matters, then map each node to the apps where the underlying work lives. Deals, orders and tasks surface as live cards flowing through the process, alongside the described customer and payment context.

Users can fork a pipeline where work splits, merge it where paths converge and rewire it as the business changes without losing cards in transit. Owners, stakeholders and process managers can see where value moves, where it is stuck and who is accountable. They can open a node, inspect its cards and redirect flow. The app also offers live observation and replay of the preceding weeks to see how work actually moved. This description does not specify the event source, synchronization protocol, history retention period, permission model, or mechanics that would guarantee card preservation during rewiring; those need separate design and proof before implementation claims.

## Supplied source wording

```text
New Repo: operate-pipelines

Turns business process into one living map — every process, every handoff, every customer, every payment, moving in real time, with you directing the traffic.

A command room for your entire business pipeline. You define the nodes — any stage, team, system, or decision point that matters — and map each one to the back-office apps where the work actually lives, so every deal, order, and task surfaces as a live card flowing through your process. The pipeline is yours to shape: fork it where work splits, merge it where it converges, and rewire it as the business changes, without losing a single card in between. Owners, stakeholders, and process managers see where value is moving, where it's stuck, and who's accountable at a glance — then act on it: open any node, inspect its cards, and redirect the flow on the spot. Replay the last weeks to see how work really moved, or watch it live as it happens.
```
