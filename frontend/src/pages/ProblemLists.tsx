import ProblemListStore from "../Stores/ProblemList/ProblemListStore.tsx";
import ProblemListHeader from "../components/ProblemLists/ProblemListHeader.tsx";
import ProblemListTable from "../components/ProblemLists/ProblemListTable.tsx";

const ProblemLists = () => {
  //console.log(problemListCtx.format.user);

  return (
    <ProblemListStore>
      <ProblemListHeader />
      <ProblemListTable />
    </ProblemListStore>
  );
};

export default ProblemLists;
