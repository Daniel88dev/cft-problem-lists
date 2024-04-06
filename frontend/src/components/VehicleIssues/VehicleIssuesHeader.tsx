import useVehicleIssuesContext from "./Store/VehicleIssuesContext.tsx";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import Notification, { ChildMethods } from "../UI/Notification.tsx";
import FilterMenu from "../UI/FilterMenu.tsx";
import {
  EXAMPLE_ProblemListData,
  EXAMPLE_VEHICLE_DATA,
  EXAMPLE_VEHICLE_ISSUES_DATA,
  PROJECT_DEFAULT,
} from "../../Assets/VEHICLE_ISSUES_DATA.ts";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import MultiSelect, { MultiOptionType } from "../UI/Select/MultiSelect.tsx";

type SelectedType = {
  projectId: number;
  list: OptionType[];
};

type FiltersType = {
  project: OptionType | undefined;
  stage: OptionType | undefined;
  status: readonly MultiOptionType[] | null | undefined;
  vehicle: readonly MultiOptionType[] | null | undefined;
};

const createOption = (stage: string): OptionType => ({
  value: stage,
  label: stage,
});

const VehicleIssuesHeader = () => {
  const {
    loadInitialData,
    projects,
    loadIssuesData,
    setLoading,
    isDataLoaded,
    data,
  } = useVehicleIssuesContext();
  const [selectedData, setSelectedData] = useState<SelectedType>({
    projectId: 0,
    list: [],
  });
  const [filterState, setFilterState] = useState<FiltersType>({
    project: undefined,
    stage: undefined,
    status: [],
    vehicle: [],
  });
  const notifyRef = useRef<ChildMethods>(null);

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    loadInitialData(PROJECT_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // todo apply other logic
  };

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const statusArray: MultiOptionType[] = [
    { label: "OPEN", value: "OPEN" },
    { label: "REPAIRED", value: "REPAIRED" },
    { label: "CANT REPAIR", value: "CANT REPAIR" },
  ];

  const vehicleArray: MultiOptionType[] = [];

  if (isDataLoaded) {
    data.vehicles.map((vehicle) => {
      vehicleArray.push({
        label: `${vehicle.carIdentification} - ${vehicle.bodyNo}`,
        value: vehicle.id,
      });
    });
  }

  const onVehicleSelect = (value: readonly MultiOptionType[] | null) => {
    if (value!.length === 0) {
      // todo apply filters
    } else {
      const array: number[] = value!.map((single) => {
        return Number(single.value);
      });
      // todo apply filters
      console.log(array);
    }
    setFilterState((prevState) => {
      return {
        ...prevState,
        vehicle: value,
      };
    });
  };

  const onStatusSelect = (value: readonly MultiOptionType[] | null) => {
    if (value!.length === 0) {
      // todo apply filters
    } else {
      const array: string[] = value!.map((single) => {
        return single.label;
      });
      // todo apply filters
      console.log(array);
    }
    setFilterState((prevState) => {
      return {
        ...prevState,
        status: value,
      };
    });
  };

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
      selectedData.projectId,
      EXAMPLE_ProblemListData
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
      setFilterState((prevState) => {
        return {
          ...prevState,
          project: value,
          stage: undefined,
        };
      });
    } else {
      setFilterState((prevState) => {
        return {
          ...prevState,
          project: undefined,
          stage: undefined,
        };
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
          defaultValue={filterState.project}
        />
        <SelectSearch
          options={selectedData.list}
          onSelect={onStageSelect}
          label={"Select Stage:"}
          defaultValue={filterState.stage}
        />
        <FilledButton onClick={loadVehicleIssues}>Load data</FilledButton>
        <MultiSelect
          options={statusArray}
          onSelect={onStatusSelect}
          label={"Filter by status:"}
          defaultValue={filterState.status}
        />
        <MultiSelect
          options={vehicleArray}
          onSelect={onVehicleSelect}
          label={"Filter by vehicle:"}
          defaultValue={filterState.vehicle}
        />
      </FilterMenu>
      <Notification ref={notifyRef} />
    </>
  );
};

export default VehicleIssuesHeader;
