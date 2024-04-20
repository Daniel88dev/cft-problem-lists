import {
  VehicleIssuesType,
  VehicleProblemType,
} from "../VehicleIssues/Store/VehicleIssuesTypes.tsx";
import TableMain from "../UI/Tables/TableMain.tsx";
import TableHeading from "../UI/Tables/TableHeading.tsx";
import Th from "../UI/Tables/Th.tsx";
import TableRow from "../UI/Tables/TableRow.tsx";
import Button from "../UI/Buttons/Button.tsx";
import { RxOpenInNewWindow } from "react-icons/rx";
import TablePicture from "../UI/Tables/TablePicture.tsx";
import DtcCodes from "../VehicleIssues/components/DtcCodes.tsx";
import ProblemCellSearch from "./components/ProblemCellSearch.tsx";

type VehicleSearchTableType = {
  data: VehicleIssuesType[];
  onLinkProblem: (value: VehicleProblemType | null, issueId: number) => void;
};

const VehicleSearchTable = ({
  data,
  onLinkProblem,
}: VehicleSearchTableType) => {
  return (
    <>
      <TableMain>
        <TableHeading>
          <Th width={"w-24"}>Item</Th>
          <Th width={"w-48"}>Picture</Th>
          <Th width={"w-48"}>Problem Name</Th>
          <Th width={"w-96"}>Problem Description</Th>
          <Th width={"w-48"}>Linked Problem</Th>
          <Th width={"w-24"}>Status</Th>
          <Th width={"w-24"}>DTC codes</Th>
        </TableHeading>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} height={"w-24"}>
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
              <TablePicture src={item.picture} alt={item.problemName} />
              <td className={"px-2"}>{item.problemName}</td>
              <td className={"px-2"}>{item.problemDescription}</td>
              <ProblemCellSearch
                data={item.connectedProblem}
                issueId={item.id}
                onLinkProblem={onLinkProblem}
              />
              <td className={"px-2"}>{item.status}</td>
              <DtcCodes dtcArray={item.DTCCodes} />
            </TableRow>
          ))}
        </tbody>
      </TableMain>
    </>
  );
};

export default VehicleSearchTable;
