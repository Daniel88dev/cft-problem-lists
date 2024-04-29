import { ChangeEvent, useState } from "react";
import { StagesType } from "../AdminTypes.ts";
import InputText from "../../../UI/Input/InputText.tsx";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import BasicSelect from "../../../UI/Select/BasicSelect.tsx";

type StagesSettingMainType = {
  stages: StagesType;
  onStageChange: (event: ChangeEvent<HTMLInputElement> | undefined) => void;
  onActiveStageChange: (value: string) => void;
};

const StagesSettingMain = ({
  stages,
  onStageChange,
  onActiveStageChange,
}: StagesSettingMainType) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHeaderClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const stagesArray = () => {
    const array = [];
    if (stages.stage1) array.push(stages.stage1);
    if (stages.stage2) array.push(stages.stage2);
    if (stages.stage3) array.push(stages.stage3);
    if (stages.stage4) array.push(stages.stage4);
    if (stages.stage5) array.push(stages.stage5);
    if (stages.stage6) array.push(stages.stage6);
    return array;
  };

  const content = (
    <>
      <div className={"flex"}>
        <InputText
          className={"w-20"}
          id={"stage1"}
          label={"Stage 1:"}
          defaultValue={stages.stage1 ? stages.stage1 : ""}
          onChange={onStageChange}
        />
        <InputText
          className={"w-20"}
          id={"stage2"}
          label={"Stage 2:"}
          defaultValue={stages.stage2 ? stages.stage2 : ""}
          onChange={onStageChange}
        />
        <InputText
          className={"w-20"}
          id={"stage3"}
          label={"Stage 3:"}
          defaultValue={stages.stage3 ? stages.stage3 : ""}
          onChange={onStageChange}
        />
        <InputText
          className={"w-20"}
          id={"stage4"}
          label={"Stage 4:"}
          defaultValue={stages.stage4 ? stages.stage4 : ""}
          onChange={onStageChange}
        />
        <InputText
          className={"w-20"}
          id={"stage5"}
          label={"Stage 5:"}
          defaultValue={stages.stage5 ? stages.stage5 : ""}
          onChange={onStageChange}
        />
        <InputText
          className={"w-20"}
          id={"stage6"}
          label={"Stage 6:"}
          defaultValue={stages.stage6 ? stages.stage6 : ""}
          onChange={onStageChange}
        />
      </div>
      <BasicSelect
        id={"activeStage"}
        label={"Select currently active stage:"}
        defaultValue={stages.active ? stages.active : ""}
        onChange={onActiveStageChange}
        valuesArray={stagesArray()}
        emptyOption={false}
      />
    </>
  );

  return (
    <div>
      <h3
        className={"text-left text-xl px-2 underline flex"}
        onClick={onHeaderClick}
      >
        Edit Stages
        {isOpen ? (
          <SlArrowUp className={"mt-1 ml-2"} />
        ) : (
          <SlArrowDown className={"mt-1 ml-2"} />
        )}
      </h3>
      {isOpen && content}
    </div>
  );
};

export default StagesSettingMain;
