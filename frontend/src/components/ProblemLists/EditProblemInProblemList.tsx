import ModalFull from "../UI/ModalFull.tsx";
import { ProblemListDataType } from "./Store/ProblemListTypes.tsx";
import { useRef, useState } from "react";
import InputText from "../UI/Input/InputText.tsx";
import InputTextArea from "../UI/Input/InputTextArea.tsx";
import useProblemListContext from "./Store/ProblemListContext.tsx";
import InputCheckbox from "../UI/Input/InputCheckbox.tsx";
import GradeSelect from "../UI/Select/GradeSelect.tsx";
import BasicSelect from "../UI/Select/BasicSelect.tsx";
import FilledButton from "../UI/Buttons/FilledButton.tsx";

type EditProblemType = {
  onClose: () => void;
  dataForEdit: ProblemListDataType;
  onSubmitData: (value: ProblemListDataType) => void;
};

const EditProblemInProblemList = ({
  onClose,
  dataForEdit,
  onSubmitData,
}: EditProblemType) => {
  const { activeProject, format } = useProblemListContext();
  const problemName = useRef<HTMLInputElement>(null);
  const problemDescription = useRef<HTMLTextAreaElement>(null);
  const actionsDone = useRef<HTMLTextAreaElement>(null);
  const counterMeasure = useRef<HTMLTextAreaElement>(null);
  //const responsibility = useRef(dataForEdit.responsibility);
  const stage1 = useRef<HTMLInputElement>(null);
  const stage2 = useRef<HTMLInputElement>(null);
  const stage3 = useRef<HTMLInputElement>(null);
  const stage4 = useRef<HTMLInputElement>(null);
  const stage5 = useRef<HTMLInputElement>(null);
  const stage6 = useRef<HTMLInputElement>(null);
  const [grade, setGrade] = useState<"A" | "B" | "C" | "D" | "S" | "">(
    dataForEdit.grade
  );
  const [classes, setClasses] = useState(() => {
    const array = format.classes.map((single) => {
      return single.class;
    });
    return {
      value: dataForEdit.class,
      array: array,
    };
  });
  const [status, setStatus] = useState(() => {
    const findStatus = format.actions.filter((action) => {
      return action.class === dataForEdit.class;
    });
    const array = findStatus.map((action) => {
      return action.action;
    });
    return {
      selected: dataForEdit.status,
      array: array,
    };
  });

  const onSubmit = () => {
    if (
      !stage1.current ||
      !stage2.current ||
      !stage3.current ||
      !stage4.current ||
      !stage5.current ||
      !stage6.current
    ) {
      return alert("Stage selection error!");
    }
    if (grade === "") {
      return alert("Select grade!");
    }
    if (
      !problemName.current ||
      !problemDescription.current ||
      !actionsDone.current ||
      !counterMeasure.current
    ) {
      return alert("Problem with filled form!");
    }
    const editedData: ProblemListDataType = {
      id: dataForEdit.id,
      item: dataForEdit.item,
      stages: {
        Stage1: stage1.current.checked,
        Stage2: stage2.current.checked,
        Stage3: stage3.current.checked,
        Stage4: stage4.current.checked,
        Stage5: stage5.current.checked,
        Stage6: stage6.current.checked,
      },
      picture: dataForEdit.picture,
      problemName: problemName.current.value,
      problemDescription: problemDescription.current.value,
      actionsDone: actionsDone.current.value,
      counterMeasure: counterMeasure.current.value,
      grade: grade,
      class: classes.value,
      status: status.selected,
      responsibility: dataForEdit.responsibility,
    };

    onSubmitData(editedData);
  };

  const onChangeClass = (value: string) => {
    setClasses((prevState) => {
      return {
        ...prevState,
        selected: value,
      };
    });
    const findStatus = format.actions.filter((action) => {
      return action.class === value;
    });
    const array = findStatus.map((status) => {
      return status.action;
    });
    setStatus({
      selected: "---",
      array: array,
    });
  };

  const onStatusChange = (value: string) => {
    setStatus((prevState) => {
      return {
        ...prevState,
        selected: value,
      };
    });
  };

  const content = (
    <div className={"w-full"}>
      <InputText
        id={"problemName"}
        label={"Problem Name:"}
        ref={problemName}
        defaultValue={dataForEdit.problemName}
      />
      <img
        className={"w-96 py-2 px-2"}
        src={dataForEdit.picture}
        alt={problemName + " picture"}
      />
      <p className={"text-sm px-2"}>
        Functionality to load picture later on with database implementation
      </p>
      <InputTextArea
        id={"problemDescription"}
        label={"Problem Description:"}
        ref={problemDescription}
        defaultValue={dataForEdit.problemDescription}
        cols={5}
      />
      <InputTextArea
        id={"actionsDone"}
        label={"Actions done:"}
        defaultValue={dataForEdit.actionsDone}
        ref={actionsDone}
      />
      <h4 className={"my-2 mx-2 text-sm"}>Stages:</h4>
      <div className={"flex"}>
        <InputCheckbox
          id={"stage1"}
          label={activeProject.stages.stage1}
          defaultChecked={dataForEdit.stages.Stage1}
          ref={stage1}
        />
        <InputCheckbox
          id={"stage2"}
          label={activeProject.stages.stage2}
          defaultChecked={dataForEdit.stages.Stage2}
          ref={stage2}
        />
        <InputCheckbox
          id={"stage3"}
          label={activeProject.stages.stage3}
          defaultChecked={dataForEdit.stages.Stage3}
          ref={stage3}
        />
        <InputCheckbox
          id={"stage4"}
          label={activeProject.stages.stage4}
          defaultChecked={dataForEdit.stages.Stage4}
          ref={stage4}
        />
        <InputCheckbox
          id={"stage5"}
          label={activeProject.stages.stage5}
          defaultChecked={dataForEdit.stages.Stage5}
          ref={stage5}
        />
        <InputCheckbox
          id={"stage6"}
          label={activeProject.stages.stage6}
          defaultChecked={dataForEdit.stages.Stage6}
          ref={stage6}
        />
      </div>
      <InputTextArea
        id={"countermeasure"}
        label={"Countermeasure:"}
        defaultValue={dataForEdit.counterMeasure}
        ref={counterMeasure}
      />
      <GradeSelect
        defaultValue={dataForEdit.grade}
        onSelect={(e) => setGrade(e)}
        label={"Select Grade:"}
        id={"grade"}
      />
      <BasicSelect
        id={"class"}
        label={"Select class:"}
        defaultValue={classes.value}
        onChange={onChangeClass}
        valuesArray={classes.array}
      />
      <BasicSelect
        id={"status"}
        label={"Select status:"}
        defaultValue={status.selected}
        onChange={onStatusChange}
        valuesArray={status.array}
      />
      <div className={"flex"}>
        <FilledButton onClick={onSubmit}>Submit</FilledButton>
        <FilledButton onClick={onClose}>Cancel</FilledButton>
      </div>
    </div>
  );

  return (
    <ModalFull
      onClose={onClose}
      type={"medium"}
      title={"Edit problem No. " + dataForEdit.item}
    >
      {content}
    </ModalFull>
  );
};

export default EditProblemInProblemList;