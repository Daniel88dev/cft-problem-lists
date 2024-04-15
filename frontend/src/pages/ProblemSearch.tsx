import ProblemSearchHeader from "../components/ProblemSearch/ProblemSearchHeader.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EXAMPLE_PROBLEM_LIST_DATA } from "../Assets/PROBLEM_LIST_DATA.ts";
import { ProblemListDataType } from "../components/ProblemLists/Store/ProblemListTypes.tsx";
import ProblemSearchDetail from "../components/ProblemSearch/ProblemSearchDetail.tsx";

type loadedProblemType = ProblemListDataType | null;

const ProblemSearch = () => {
  const { problemId } = useParams();
  const [loadedProblem, setLoadedProblem] = useState<loadedProblemType>(null);
  console.log(problemId);

  useEffect(() => {
    if (Number(problemId)) {
      const findProblem = EXAMPLE_PROBLEM_LIST_DATA.find((problem) => {
        return problem.id === Number(problemId);
      });
      setLoadedProblem(findProblem!);
    }
  }, [problemId]);

  console.log(loadedProblem);

  return (
    <>
      <ProblemSearchHeader problemId={Number(problemId)} />
      {loadedProblem && <ProblemSearchDetail data={loadedProblem} />}
    </>
  );
};

export default ProblemSearch;
