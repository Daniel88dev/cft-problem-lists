import { ConnectedProblemType } from "../../VehicleIssues/components/ProblemCell.tsx";
import { useRef, useState } from "react";
import Notification, { ChildMethods } from "../../UI/Notification.tsx";
import Button from "../../UI/Buttons/Button.tsx";
import { RxOpenInNewWindow } from "react-icons/rx";
import LinkProblem from "../../VehicleIssues/components/LinkProblem.tsx";
import { VehicleProblemType } from "../../VehicleIssues/Store/VehicleIssuesTypes.tsx";

type ProblemCellSearchType = {
  data: ConnectedProblemType | null;
  issueId: number;
  onLinkProblem: (value: VehicleProblemType | null, issueId: number) => void;
};

const ProblemCellSearch = ({
  data,
  issueId,
  onLinkProblem,
}: ProblemCellSearchType) => {
  const [editProblem, setEditProblem] = useState(false);
  const notifyRef = useRef<ChildMethods>(null);

  const onCloseEdit = () => {
    setEditProblem(false);
  };

  const onProblemEdit = () => {
    //setEditProblem(true);
    alert(
      "Linking problem on this menu not functional now in development. " +
        "Go to Vehicle-issue to test problem linking."
    );
  };

  const onLinkSubmit = (value: VehicleProblemType) => {
    if (value.id !== 0) {
      onLinkProblem(value, issueId);
    } else {
      onLinkProblem(null, issueId);
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
      </td>
      {editProblem && (
        //todo declare same function outside of Context, or update to not use Context
        <LinkProblem
          onClose={onCloseEdit}
          data={data}
          onLinkSubmit={onLinkSubmit}
        />
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default ProblemCellSearch;
