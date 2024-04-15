import { ProblemListDataType } from "../ProblemLists/Store/ProblemListTypes.tsx";

type ProblemSearchDetailType = {
  data: ProblemListDataType;
};
const ProblemSearchDetail = ({ data }: ProblemSearchDetailType) => {
  //todo add logic to display stages for related project
  return (
    <div
      className={
        "py-4 border-black dark:border-white border-2 rounded-2xl h-auto overflow-visible"
      }
    >
      <div className={"flex"}>
        <h1 className={"text-4xl mx-2"}>Item: {data.item}</h1>
        <h1 className={"text-4xl ml-4"}>Problem Name: {data.problemName}</h1>
      </div>
      <img
        className={"w-96 p-2"}
        src={data.picture}
        alt={data.problemName + " picture"}
      />
      <div className={"py-2"}>
        <h3 className={"text-xl text-left px-2 underline"}>
          Problem description:
        </h3>
        <p className={"text-2 text-left px-2"}>{data.problemDescription}</p>
      </div>
      <div className={"py-2"}>
        <h3 className={"text-xl text-left px-2 underline"}>Actions done:</h3>
        <p className={"text-2 text-left px-2"}>{data.actionsDone}</p>
      </div>
      <div className={"py-2"}>
        <h3 className={"text-xl text-left px-2 underline"}>Stages:</h3>
        <div className={"flex"}>
          {data.stages.Stage1 && <p className={"mx-2"}>Proto</p>}
          {data.stages.Stage2 && <p className={"mx-2"}>SP1</p>}
          {data.stages.Stage3 && <p className={"mx-2"}>SP2</p>}
          {data.stages.Stage4 && <p className={"mx-2"}>LP1</p>}
          {data.stages.Stage5 && <p className={"mx-2"}>LP2</p>}
          {data.stages.Stage6 && <p className={"mx-2"}>M</p>}
        </div>
      </div>
      <div className={"py-2"}>
        <h3 className={"text-xl text-left px-2 underline"}>Countermeasure:</h3>
        <p className={"text-2 text-left px-2"}>{data.counterMeasure}</p>
      </div>
    </div>
  );
};

export default ProblemSearchDetail;
