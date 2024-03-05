import {
  Stages,
  StagesNamesType,
} from "../../../Stores/ProblemList/ProblemListTypes.tsx";

type TableStagesType = {
  stages: Stages;
  names: StagesNamesType;
};
const TableStages = ({ stages, names }: TableStagesType) => {
  const data = (
    <>
      {stages.Stage1 && <p>{names.stage1}</p>}
      {stages.Stage2 && <p>{names.stage2}</p>}
      {stages.Stage3 && <p>{names.stage3}</p>}
      {stages.Stage4 && <p>{names.stage4}</p>}
      {stages.Stage5 && <p>{names.stage5}</p>}
      {stages.Stage6 && <p>{names.stage6}</p>}
    </>
  );

  return <td>{data}</td>;
};

export default TableStages;
