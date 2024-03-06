import { useContext } from "react";
import { ProblemListContext } from "./ProblemListStore.tsx";

function useProblemListContext() {
  const problemListCtx = useContext(ProblemListContext);

  if (problemListCtx === null) {
    throw new Error("problemListContext is null");
  }
  return problemListCtx;
}

export default useProblemListContext;
