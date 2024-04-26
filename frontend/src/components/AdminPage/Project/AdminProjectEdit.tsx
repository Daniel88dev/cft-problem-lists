import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { ColorType, ProjectType } from "./AdminTypes.ts";
import InputText from "../../UI/Input/InputText.tsx";
import BasicSelect from "../../UI/Select/BasicSelect.tsx";
import ColorSelection from "./ColorSelection.tsx";
import FilledButton from "../../UI/Buttons/FilledButton.tsx";

type AdminProjectEditType = {
  data: ProjectType;
};

const AdminProjectEdit = ({ data }: AdminProjectEditType) => {
  const projectName = useRef<HTMLInputElement>(null);
  const [projectData, setProjectData] = useState(data);

  const onSecurityChange = (value: string) => {
    if (value === "SECURED" || value === "PUBLIC") {
      setProjectData((prevState) => {
        return {
          ...prevState,
          security: value,
        };
      });
    } else {
      alert("Incorrect security selected!");
    }
  };

  const onDisabledChange = (value: string) => {
    if (value === "ACTIVE") {
      setProjectData((prevState) => {
        return {
          ...prevState,
          disabled: false,
        };
      });
    } else if (value === "DISABLED") {
      setProjectData((prevState) => {
        return {
          ...prevState,
          disabled: true,
        };
      });
    }
  };

  const stagesArray = () => {
    const array = [];
    if (projectData.stages.stage1) array.push(projectData.stages.stage1);
    if (projectData.stages.stage2) array.push(projectData.stages.stage2);
    if (projectData.stages.stage3) array.push(projectData.stages.stage3);
    if (projectData.stages.stage4) array.push(projectData.stages.stage4);
    if (projectData.stages.stage5) array.push(projectData.stages.stage5);
    if (projectData.stages.stage6) array.push(projectData.stages.stage6);
    return array;
  };

  const onStageEdit = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    const stageName = event?.target.getAttribute("id");
    const value = event?.target.value;
    if (stageName && value) {
      setProjectData((prevState) => {
        return {
          ...prevState,
          stages: {
            ...prevState.stages,
            [stageName]: value,
          },
        };
      });
    }
  };

  const onActiveStageActive = (value: string) => {
    console.log(value);
  };

  const onAddNewColor = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //todo add logic for new color id
    const newColor: ColorType = {
      name: null,
      color: null,
      text: "black",
      id: 0,
    };
    const array = projectData.colors;
    array.push(newColor);
    setProjectData((prevState) => {
      return {
        ...prevState,
        colors: array,
      };
    });
  };

  const onColorChange = (value: ColorType) => {
    const colorId = value.id;
    const colorArray = projectData.colors;
    colorArray[colorId] = value;
    setProjectData((prevState) => {
      return {
        ...prevState,
        colors: colorArray,
      };
    });
  };

  const onColorRemove = (colorId: number) => {
    const colorArray = projectData.colors;
    colorArray.splice(Number(colorId), 1);
    setProjectData((prevState) => {
      return {
        ...prevState,
        colors: colorArray,
      };
    });
  };

  console.log(projectData.colors);

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
          defaultValue={projectData.disabled ? "DISABLED" : "ACTIVE"}
          onChange={onDisabledChange}
          valuesArray={["ACTIVE", "DISABLED"]}
          emptyOption={false}
        />
        <BasicSelect
          id={"security"}
          label={"Select Project Security"}
          defaultValue={projectData.security}
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
          defaultValue={
            projectData.stages.stage1 ? projectData.stages.stage1 : ""
          }
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage2"}
          label={"Stage 2:"}
          defaultValue={
            projectData.stages.stage2 ? projectData.stages.stage2 : ""
          }
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage3"}
          label={"Stage 3:"}
          defaultValue={
            projectData.stages.stage3 ? projectData.stages.stage3 : ""
          }
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage4"}
          label={"Stage 4:"}
          defaultValue={
            projectData.stages.stage4 ? projectData.stages.stage4 : ""
          }
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage5"}
          label={"Stage 5:"}
          defaultValue={
            projectData.stages.stage5 ? projectData.stages.stage5 : ""
          }
          onChange={onStageEdit}
        />
        <InputText
          className={"w-20"}
          id={"stage6"}
          label={"Stage 6:"}
          defaultValue={
            projectData.stages.stage6 ? projectData.stages.stage6 : ""
          }
          onChange={onStageEdit}
        />
      </div>
      <BasicSelect
        id={"activeStage"}
        label={"Select currently active stage:"}
        defaultValue={
          projectData.stages.active ? projectData.stages.active : ""
        }
        onChange={onActiveStageActive}
        valuesArray={stagesArray()}
        emptyOption={false}
      />
      {projectData.colors.map((color) => (
        <ColorSelection
          key={`color${color.id}`}
          data={color}
          onColorUpdate={onColorChange}
          onColorRemove={onColorRemove}
        />
      ))}
      <FilledButton className={"w-20"} onClick={onAddNewColor}>
        Add Color
      </FilledButton>
    </form>
  );
};

export default AdminProjectEdit;
