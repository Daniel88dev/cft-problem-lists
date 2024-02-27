import { useProblemListContext } from "../../Stores/ProblemListStore.tsx";
import { useCallback, useEffect } from "react";
import {
  PROJECTS_DEFAULT,
  USER_DEFAULT,
  USERS_DEFAULT,
} from "../../Assets/PROBLEM_LIST_DATA.ts";

const ProblemListHeader = () => {
  const problemListCtx = useProblemListContext();

  const loadInitialData = useCallback(() => {
    //TODO apply loading from backend
    const loadedData = {
      user: USER_DEFAULT,
      allUsers: USERS_DEFAULT,
      projects: PROJECTS_DEFAULT,
    };
    problemListCtx.loadInitialData(loadedData);
  }, [problemListCtx]);

  console.log(problemListCtx.format);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return <h1>Test</h1>;
};

export default ProblemListHeader;
