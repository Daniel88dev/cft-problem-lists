import { ProjectType, StagesType } from "./AdminTypes.ts";
import { ChangeEvent, useRef, useState } from "react";
import InputText from "../../UI/Input/InputText.tsx";
import BasicSelect from "../../UI/Select/BasicSelect.tsx";
import ColorSelection from "./ColorSelection.tsx";

type AdminProjectEditType = {
  data: ProjectType;
};

const AdminProjectEdit = ({ data }: AdminProjectEditType) => {
  const projectName = useRef<HTMLInputElement>(null);
  const [security, setSecurity] = useState<"SECURED" | "PUBLIC">(data.security);
  const [projectDisabled, setProjectDisabled] = useState<boolean>(
    data.disabled
  );
  const [stagesData, setStagesData] = useState<StagesType>(data.stages);

  const onSecurityChange = (value: string) => {
    if (value === "SECURED" || value === "PUBLIC") {
      setSecurity(value);
    } else {
      alert("Incorrect security selected!");
    }
  };

  const onDisabledChange = (value: string) => {
    if (value === "ACTIVE") {
      setProjectDisabled(false);
    } else if (value === "DISABLED") {
      setProjectDisabled(true);
    }
  };

  const stagesArray = () => {
    const array = [];
    if (stagesData.stage1) array.push(stagesData.stage1);
    if (stagesData.stage2) array.push(stagesData.stage2);
    if (stagesData.stage3) array.push(stagesData.stage3);
    if (stagesData.stage4) array.push(stagesData.stage4);
    if (stagesData.stage5) array.push(stagesData.stage5);
    if (stagesData.stage6) array.push(stagesData.stage6);
    return array;
  };

  const onStageEdit = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    const stageName = event?.target.getAttribute("id");
    const value = event?.target.value;
    if (stageName && value) {
      setStagesData((prevState) => {
        return {
          ...prevState,
          [stageName]: value,
        };
      });
    }
  };

  console.log(stagesData);

  const onActiveStageActive = (value: string) => {
    console.log(value);
  };

  return (
    <form className={"flex flex-col justify-self-start mx-auto"}>
      <InputText
        ref={projectName}
        id={"projectName"}
        label={"Enter Project Name:"}
        defaultValue={data.name}
      />
      <div className={"flex"}>
        <BasicSelect
          id={"disabled"}
          label={"Is Project active?"}
          defaultValue={projectDisabled ? "DISABLED" : "ACTIVE"}
          onChange={onDisabledChange}
          valuesArray={["ACTIVE", "DISABLED"]}
          emptyOption={false}
        />
        <BasicSelect
          id={"security"}
          label={"Select Project Security"}
          defaultValue={security}
          onChange={onSecurityChange}
          valuesArray={["SECURED", "PUBLIC"]}
          emptyOption={false}
        />
      </div>
      <h3 className={"text-left"}>Enter Stages Names:</h3>
      <div className={"flex"}>
        <InputText
          className={"w-20"}
          id={"stage1"}
          label={"Stage 1:"}
          defaultValue={stagesData.stage1 ? stagesData.stage1 : ""}
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage2"}
          label={"Stage 2:"}
          defaultValue={stagesData.stage2 ? stagesData.stage2 : ""}
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage3"}
          label={"Stage 3:"}
          defaultValue={stagesData.stage3 ? stagesData.stage3 : ""}
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage4"}
          label={"Stage 4:"}
          defaultValue={stagesData.stage4 ? stagesData.stage4 : ""}
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage5"}
          label={"Stage 5:"}
          defaultValue={stagesData.stage5 ? stagesData.stage5 : ""}
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage6"}
          label={"Stage 6:"}
          defaultValue={stagesData.stage6 ? stagesData.stage6 : ""}
          onChange={onStageEdit}
        />
      </div>
      <BasicSelect
        id={"activeStage"}
        label={"Select currently active stage:"}
        defaultValue={stagesData.active ? stagesData.active : ""}
        onChange={onActiveStageActive}
        valuesArray={stagesArray()}
        emptyOption={false}
      />
      {data.colors.map((color, index) => (
        <ColorSelection
          key={`color${index}`}
          data={color}
          id={`Color${index}`}
        />
      ))}
    </form>
  );
};

export default AdminProjectEdit;
