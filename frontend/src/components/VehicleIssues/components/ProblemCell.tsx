import Button from "../../UI/Buttons/Button.tsx";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useRef, useState } from "react";
import LinkProblem from "./LinkProblem.tsx";
import Notification, { ChildMethods } from "../../UI/Notification.tsx";
import useVehicleIssuesContext from "../Store/VehicleIssuesContext.tsx";
import { VehicleProblemType } from "../Store/VehicleIssuesTypes.tsx";

export type ConnectedProblemType = {
  list: string;
  id: number;
  item: number;
  problemName: string;
};

type ProblemCellType = {
  data: ConnectedProblemType | null;
  issueId: number;
};

const ProblemCell = ({ data, issueId }: ProblemCellType) => {
  const { setLinkedProblem } = useVehicleIssuesContext();
  const [editProblem, setEditProblem] = useState(false);
  const notifyRef = useRef<ChildMethods>(null);

  const onCloseEdit = () => {
    setEditProblem(false);
  };

  const onProblemEdit = () => {
    setEditProblem(true);
  };

  const onLinkSubmit = (value: VehicleProblemType) => {
    if (value.id !== 0) {
      setLinkedProblem(value, issueId);
    } else {
      setLinkedProblem(null, issueId);
    }
    setEditProblem(false);
    if (notifyRef.current) {
      notifyRef.current.setNotify("Data updated", "basic");
    }
  };

  return (
    <>
      <td className={"px-2"}>
        {data && <p>{`${data.list} - ${data.item} - ${data.problemName}`}</p>}
        <div className={"flex justify-end"}>
          {data && (
            <Button className={"px-2"}>
              <div className={"flex content-center"}>
                Open
                <RxOpenInNewWindow />
              </div>
            </Button>
          )}
          <Button className={"px-2"} onClick={onProblemEdit}>
            Link
          </Button>
        </div>
        {editProblem && (
          <LinkProblem
            onClose={onCloseEdit}
            data={data}
            onLinkSubmit={onLinkSubmit}
          />
        )}
      </td>
      <Notification ref={notifyRef} />
    </>
  );
};

export default ProblemCell;
