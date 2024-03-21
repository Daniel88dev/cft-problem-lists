import useVehicleListsContext from "./Store/VehicleListsContext.tsx";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  EXAMPLE_VEHICLE_DATA,
  PROJECT_DEFAULT,
} from "../../Assets/VEHICLE_LIST_DATA.ts";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import Notification, { ChildMethods } from "../UI/Notification.tsx";
import FilterMenu from "../UI/FilterMenu.tsx";
import FilledButton from "../UI/Buttons/FilledButton.tsx";

type SelectedType = {
  projectId: number;
  list: OptionType[];
};

type FiltersType = {
  project: OptionType | undefined;
  stage: OptionType | undefined;
};

const createOption = (stage: string): OptionType => ({
  value: stage,
  label: stage,
});

const VehicleListHeader = () => {
  const { loadInitialData, setLoading, loadVehicles, projects } =
    useVehicleListsContext();
  const [selectedData, setSelectedData] = useState<SelectedType>({
    projectId: 0,
    list: [],
  });
  const [filterState, setFilterState] = useState<FiltersType>({
    project: undefined,
    stage: undefined,
  });
  const notifyRef = useRef<ChildMethods>(null);

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    loadInitialData(PROJECT_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadVehicleData = () => {
    setLoading();
    //TODO load data from backend
    loadVehicles(EXAMPLE_VEHICLE_DATA, selectedData.projectId);
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

  const projectList = () => {
    const array: OptionType[] = [];
    projects.map((project) => {
      array.push({
        label: project.name,
        value: project.id,
      });
    });
    return array;
  };

  const onStageSelect = (value: OptionType | null) => {
    console.log(value);
    if (value !== null) {
      setFilterState((prevState) => {
        return {
          ...prevState,
          stage: value,
        };
      });
    } else {
      setFilterState((prevState) => {
        return {
          ...prevState,
          stage: undefined,
        };
      });
    }
    // TODO apply logic
  };

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  return (
    <>
      <FilterMenu pageName={"Vehicle lists"}>
        <SelectSearch
          options={projectList()}
          onSelect={onProjectSelect}
          label={"Select Project:"}
          defaultValue={filterState.project}
        />
        <SelectSearch
          options={selectedData.list}
          onSelect={onStageSelect}
          label={"Select stage:"}
          defaultValue={filterState.stage}
        />
        <FilledButton onClick={loadVehicleData}>Load data</FilledButton>
      </FilterMenu>
      <Notification ref={notifyRef} />
    </>
  );
};

export default VehicleListHeader;
