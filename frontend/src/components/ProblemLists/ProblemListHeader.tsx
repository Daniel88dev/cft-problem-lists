import { useProblemListContext } from "../../Stores/ProblemListStore.tsx";
import { useCallback, useEffect } from "react";
import {
  PROJECTS_DEFAULT,
  USER_DEFAULT,
  USERS_DEFAULT,
} from "../../Assets/PROBLEM_LIST_DATA.ts";

const ProblemListHeader = () => {
  const { loadInitialData, format } = useProblemListContext();

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    const loadedData = {
      user: USER_DEFAULT,
      allUsers: USERS_DEFAULT,
      projects: PROJECTS_DEFAULT,
    };
    loadInitialData(loadedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(format);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  return <h1>Test</h1>;
};

export default ProblemListHeader;
