import useProblemListContext from "../../Stores/ProblemList/ProblemListContext.tsx";
import TableMain from "../UI/Tables/TableMain.tsx";
import TableHeading from "../UI/Tables/TableHeading.tsx";
import Th from "../UI/Tables/Th.tsx";
import TableRow from "../UI/Tables/TableRow.tsx";
import TableStages from "../UI/Tables/TableStages.tsx";
import TablePicture from "../UI/Tables/TablePicture.tsx";
import Loader from "../UI/Loader.tsx";
import { useState } from "react";
import EditProblemInProblemList from "./EditProblemInProblemList.tsx";
import { ProblemListDataType } from "../../Stores/ProblemList/ProblemListTypes.tsx";
import GradeCell from "../UI/Tables/GradeCell.tsx";

const ProblemListTable = () => {
  const { data, activeProject, isDataLoaded, isLoading } =
    useProblemListContext();
  const [dataForEdit, setDataForEdit] = useState<ProblemListDataType | null>(
    null
  );
  console.log(data);

  return (
    <>
      {isLoading && <Loader />}
      {isDataLoaded && !isLoading && (
        <TableMain>
          <TableHeading>
            <Th width="w-24">Item</Th>
            <Th width="w-24">Stages</Th>
            <Th width="w-48">Picture</Th>
            <Th width="w-24">Problem Name</Th>
            <Th width="w-48">Problem Description</Th>
            <Th width="w-48">Actions done</Th>
            <Th width="w-48">Counter Measure</Th>
            <Th width="w-24">Grade</Th>
            <Th width="w-24">Class</Th>
            <Th width="w-24">Status</Th>
            <Th width="w-24">Responsibility</Th>
          </TableHeading>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <td
                  className="hover:cursor-pointer hover:underline px-2"
                  onClick={() => setDataForEdit(item)}
                >
                  {item.item}
                </td>
                <TableStages
                  stages={item.stages}
                  names={activeProject.stages}
                />
                <TablePicture src={item.picture} alt="testing picture" />
                <td className={"px-2"}>{item.problemName}</td>
                <td className={"px-2"}>{item.problemDescription}</td>
                <td className={"px-2"}>{item.actionsDone}</td>
                <td className={"px-2"}>{item.counterMeasure}</td>
                <GradeCell value={item.grade} />
                <td className={"px-2"}>{item.class}</td>
                <td className={"px-2"}>{item.status}</td>
                <td className={"px-2"}>{item.responsibility}</td>
              </TableRow>
            ))}
          </tbody>
        </TableMain>
      )}
      {dataForEdit && (
        <EditProblemInProblemList
          onClose={() => setDataForEdit(null)}
          dataForEdit={dataForEdit}
        />
      )}
    </>
  );
};

export default ProblemListTable;
