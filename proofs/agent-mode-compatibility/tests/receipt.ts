//--------------------------------------------------------------------//
// Types

//one named observation retained by the integration harness
export type ProofCheck = { name: string, passed: boolean, detail?: unknown };

//each runner owns its extra metadata; unclassified evidence stays unknown
export type ProofReceipt<Check = ProofCheck> = {
  checks: Check[],
  [key: string]: unknown
};
