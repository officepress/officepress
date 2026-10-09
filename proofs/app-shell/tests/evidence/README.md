# Test evidence

Evidence for this proof lives under `tests/evidence/`:

- `playwright/<run-id>/`: browser captures from proof runs; ignored by Git.
- `verification/`: retained verification reports and reviewed screenshots.
- `receipts/`: timestamped machine-run results, including failed runs.
- `reviews/`: review notes and their screenshots or copied receipts.

Keep historical JSON receipt contents intact. Paths inside older receipts record
the layout at the time of their run; their files have since moved here.

See the [retained app-shell evidence](verification/README.md) for its coverage.
