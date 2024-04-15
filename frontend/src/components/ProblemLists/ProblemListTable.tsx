import useProblemListContext from "./Store/ProblemListContext.tsx";
import TableMain from "../UI/Tables/TableMain.tsx";
import TableHeading from "../UI/Tables/TableHeading.tsx";
import Th from "../UI/Tables/Th.tsx";
import TableRow from "../UI/Tables/TableRow.tsx";
import TableStages from "../UI/Tables/TableStages.tsx";
import TablePicture from "../UI/Tables/TablePicture.tsx";
import Loader from "../UI/Loader.tsx";
import { useRef, useState } from "react";
import EditProblemInProblemList from "./EditProblemInProblemList.tsx";
import { type ProblemListDataType } from "./Store/ProblemListTypes.tsx";
import GradeCell from "../UI/Tables/GradeCell.tsx";
import Notification, { type ChildMethods } from "../UI/Notification.tsx";
import { PersonTableCell } from "./components/PersonTableCell.tsx";
import SubscribeToListeners from "./components/SubscribeToListeners.tsx";
import Button from "../UI/Buttons/Button.tsx";
import { RxOpenInNewWindow } from "react-icons/rx";
import { format } from "date-fns";

const ProblemListTable = () => {
  const {
    data,
    activeProject,
    isDataLoaded,
    isLoading,
    changeProblem,
    filters,
  } = useProblemListContext();
  const [dataForEdit, setDataForEdit] = useState<ProblemListDataType | null>(
    null
  );
  const notifyRef = useRef<ChildMethods>(null);

  let filtered: ProblemListDataType[] = [];

  if (!filters.filtersApplied) {
    filtered = data;
  } else {
    if (filters.status.length !== 0 && filters.grade.length !== 0) {
      filtered = data.filter((dat) => {
        return (
          filters.status.includes(dat.status) &&
          filters.grade.includes(dat.grade)
        );
      });
    } else if (filters.status.length !== 0) {
      filtered = data.filter((dat) => {
        return filters.status.includes(dat.status);
      });
    } else if (filters.grade.length !== 0) {
      filtered = data.filter((dat) => {
        return filters.grade.includes(dat.grade);
      });
    }
  }

  const onProblemEditSubmit = (dataForChange: ProblemListDataType) => {
    changeProblem(dataForChange);
    if (notifyRef.current) {
      notifyRef.current.setNotify("Data updated", "basic");
    }
    setDataForEdit(null);
  };

  const onOpenInTab = (location: number) => {
    window.open(`/problem-search/problem/${location}`);
  };

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
            <Th width="w-24">Action</Th>
            <Th width={"w-24"}>Status</Th>
            <Th width="w-24">Responsibility</Th>
            <Th width={"w-24"}>Date</Th>
            <Th width={"w-[500px]"}>Listeners</Th>
            <Th width={"w-24"}>Subscribe</Th>
          </TableHeading>
          <tbody>
            {filtered.map((item) => (
              <TableRow key={item.id} height={"w-24"}>
                <td className="flex-col px-2">
                  <p>{item.item}</p>
                  <Button onClick={() => onOpenInTab(item.id)}>
                    <div className={"flex content-center"}>
                      Open
                      <RxOpenInNewWindow />
                    </div>
                  </Button>
                  <Button onClick={() => setDataForEdit(item)}>Edit</Button>
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
                <td className={"px-2"}>{item.action}</td>
                <td className={"px-2"}>{item.status}</td>
                <td className={"px-2"}>
                  {item.responsibility.name} - {item.responsibility.designation}
                </td>
                <td className={"px-2"}>
                  {item.plan ? format(item.plan, "PPP") : ""}
                </td>
                <PersonTableCell users={item.listeners} />
                <SubscribeToListeners
                  listeners={item.listeners}
                  itemId={item.id}
                />
              </TableRow>
            ))}
          </tbody>
        </TableMain>
      )}
      {dataForEdit && (
        <EditProblemInProblemList
          onClose={() => setDataForEdit(null)}
          dataForEdit={dataForEdit}
          onSubmitData={onProblemEditSubmit}
        />
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default ProblemListTable;
