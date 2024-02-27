import ProblemListStore from "../Stores/ProblemListStore.tsx";
import ProblemListHeader from "../components/ProblemLists/ProblemListHeader.tsx";

const ProblemLists = () => {
  //console.log(problemListCtx.format.user);

  return (
    <ProblemListStore>
      <h1>Problem Lists</h1>
      <ProblemListHeader />
    </ProblemListStore>
  );
};

export default ProblemLists;
