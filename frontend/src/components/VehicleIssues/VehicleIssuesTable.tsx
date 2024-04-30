import useVehicleIssuesContext from "./Store/VehicleIssuesContext.tsx";
import { useRef } from "react";
import Notification, { ChildMethods } from "../UI/Notification.tsx";
import Loader from "../UI/Loader.tsx";
import TableMain from "../UI/Tables/TableMain.tsx";
import TableHeading from "../UI/Tables/TableHeading.tsx";
import Th from "../UI/Tables/Th.tsx";
import TableRow from "../UI/Tables/TableRow.tsx";
import TablePicture from "../UI/Tables/TablePicture.tsx";
import Button from "../UI/Buttons/Button.tsx";
import { RxOpenInNewWindow } from "react-icons/rx";
import DtcCodes from "./components/DtcCodes.tsx";
import ProblemCell from "./components/ProblemCell.tsx";

const VehicleIssuesTable = () => {
  const { data, isDataLoaded, isLoading } = useVehicleIssuesContext();
  const notifyRef = useRef<ChildMethods>(null);

  return (
    <>
      {isLoading && <Loader />}
      {isDataLoaded && !isLoading && (
        <TableMain>
          <TableHeading>
            <Th width={"w-24"}>Item</Th>
            <Th width={"w-24"}>Car ID</Th>
            <Th width={"w-48"}>Body No.</Th>
            <Th width={"w-24"}>Vehicle stage</Th>
            <Th width={"w-48"}>Picture</Th>
            <Th width={"w-48"}>Problem Name</Th>
            <Th width={"w-96"}>Problem Description</Th>
            <Th width={"w-48"}>Linked Problem</Th>
            <Th width={"w-24"}>Status</Th>
            <Th width={"w-24"}>DTC codes</Th>
          </TableHeading>
          <tbody>
            {data.vehicleIssues.map((item) => (
              <TableRow key={item.id} height={"h-24"}>
                <td className={"flex-col px-2"}>
                  <p>{item.item}</p>
                  <Button>
                    <div className={"flex content-center"}>
                      Open
                      <RxOpenInNewWindow />
                    </div>
                  </Button>
                  <Button>Edit</Button>
                </td>
                <td className={"px-2"}>{item.vehicleId.carIdentification}</td>
                <td className={"px-2"}>{item.vehicleId.bodyNo}</td>
                <td className={"px-2"}>{item.vehicleId.vehicleStage}</td>
                <TablePicture src={item.picture} alt={item.problemName} />
                <td className={"px-2"}>{item.problemName}</td>
                <td className={"px-2"}>{item.problemDescription}</td>
                <ProblemCell data={item.connectedProblem} issueId={item.id} />
                <td className={"px-2"}>{item.status}</td>
                <DtcCodes dtcArray={item.DTCCodes} />
              </TableRow>
            ))}
          </tbody>
        </TableMain>
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default VehicleIssuesTable;
