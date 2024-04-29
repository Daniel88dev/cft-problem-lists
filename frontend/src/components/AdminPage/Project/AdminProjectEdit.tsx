import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { ColorType, ProjectType } from "./AdminTypes.ts";
import InputText from "../../UI/Input/InputText.tsx";
import BasicSelect from "../../UI/Select/BasicSelect.tsx";
import AdminEditClasses from "./components/AdminEditClasses.tsx";
import ColorSettingMain from "./components/ColorSettingMain.tsx";
import StagesSettingMain from "./components/StagesSettingMain.tsx";
import ProblemListsMain from "./components/ProblemListsMain.tsx";

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
    <form
      className={"flex flex-col justify-self-start mx-auto w-[1152px] ml-8"}
    >
      <h1 className={"text-left text-2xl px-2 underline"}>
        Edit Selected Project:
      </h1>
      <InputText
        ref={projectName}
        id={"projectName"}
        className={"w-44"}
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
      <StagesSettingMain
        stages={projectData.stages}
        onStageChange={onStageEdit}
        onActiveStageChange={onActiveStageActive}
      />
      <ProblemListsMain problemLists={projectData.problemLists} />
      <ColorSettingMain
        data={projectData.colors}
        onColorUpdate={onColorChange}
        onColorRemove={onColorRemove}
        onAddNewColor={onAddNewColor}
      />
      <AdminEditClasses data={projectData.actions} />
    </form>
  );
};

export default AdminProjectEdit;
