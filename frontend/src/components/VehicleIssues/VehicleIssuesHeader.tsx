import useVehicleIssuesContext from "./Store/VehicleIssuesContext.tsx";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import Notification, { ChildMethods } from "../UI/Notification.tsx";
import FilterMenu from "../UI/FilterMenu.tsx";
import {
  EXAMPLE_VEHICLE_DATA,
  EXAMPLE_VEHICLE_ISSUES_DATA,
  PROJECT_DEFAULT,
} from "../../Assets/VEHICLE_ISSUES_DATA.ts";
import FilledButton from "../UI/Buttons/FilledButton.tsx";

type SelectedType = {
  projectId: number;
  list: OptionType[];
};

const createOption = (stage: string): OptionType => ({
  value: stage,
  label: stage,
});

const VehicleIssuesHeader = () => {
  const { loadInitialData, projects, loadIssuesData, setLoading } =
    useVehicleIssuesContext();
  const [selectedData, setSelectedData] = useState<SelectedType>({
    projectId: 0,
    list: [],
  });
  const notifyRef = useRef<ChildMethods>(null);

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    loadInitialData(PROJECT_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onStageSelect = (value: OptionType | null) => {
    console.log(value);
  };

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const projectList = () => {
    const projectsArray: OptionType[] = [];
    projects.map((project) => {
      projectsArray.push({
        label: project.name,
        value: project.id,
      });
    });
    return projectsArray;
  };

  const loadVehicleIssues = () => {
    setLoading();
    //TODO load data from backend
    loadIssuesData(
      EXAMPLE_VEHICLE_ISSUES_DATA,
      EXAMPLE_VEHICLE_DATA,
      selectedData.projectId
    );
    if (notifyRef.current) {
      notifyRef.current.setNotify("Data Load Successfully", "basic");
    }
  };

  const onProjectSelect = (value: OptionType | null) => {
    console.log(value);
    if (value !== null) {
      setSelectedData((prevState) => {
        const selectedProject = projects.find((project) => {
          return project.id === +value.value;
        });

        if (selectedProject) {
          const stages = selectedProject.stages;
          const listArray: OptionType[] = [
            createOption(stages.stage1),
            createOption(stages.stage2),
            createOption(stages.stage3),
            createOption(stages.stage4),
            createOption(stages.stage5),
            createOption(stages.stage6),
          ];
          return {
            ...prevState,
            projectId: +value.value,
            list: listArray,
          };
        } else {
          return prevState;
        }
      });
    }
  };

  return (
    <>
      <FilterMenu pageName={"Vehicle Issues"}>
        <SelectSearch
          options={projectList()}
          onSelect={onProjectSelect}
          label={"Select Project:"}
        />
        <SelectSearch
          options={selectedData.list}
          onSelect={onStageSelect}
          label={"Select Stage:"}
        />
        <FilledButton onClick={loadVehicleIssues}>Load data</FilledButton>
      </FilterMenu>
      <Notification ref={notifyRef} />
    </>
  );
};

export default VehicleIssuesHeader;
