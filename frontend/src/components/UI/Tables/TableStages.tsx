import { Stages } from "../../VehicleIssues/EXAMPLE_DATA.tsx";

type TableStagesType = {
  stages: Stages;
};
const TableStages = ({ stages }: TableStagesType) => {
  const data = (
    <>
      {stages.Proto && <p>Proto</p>}
      {stages.SP1 && <p>SP1</p>}
      {stages.SP2 && <p>SP2</p>}
      {stages.LP1 && <p>LP1</p>}
      {stages.LP2 && <p>LP2</p>}
      {stages.M && <p>M</p>}
    </>
  );

  return <td>{data}</td>;
};

export default TableStages;
