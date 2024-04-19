import FilterMenu from "../UI/FilterMenu.tsx";
import { useCallback, useEffect, useState } from "react";
import { ProjectTypes } from "../ProblemLists/Store/ProblemListTypes.tsx";
import { PROJECTS_DEFAULT } from "../../Assets/PROBLEM_LIST_DATA.ts";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import { EXAMPLE_VEHICLE_DATA } from "../../Assets/VEHICLE_ISSUES_DATA.ts";
import { createOption } from "../VehicleIssues/components/createOption.ts";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import { useNavigate } from "react-router-dom";

type VehicleSearchHeaderType = {
  vehicleId: number;
};

type selectedDataType = {
  projectList: OptionType[];
  selectedProject: OptionType | null;
  stageList: OptionType[];
  selectedStage: OptionType | null;
  vehicleList: OptionType[];
  selectedVehicle: OptionType | null;
};

const VehicleSearchHeader = ({ vehicleId }: VehicleSearchHeaderType) => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [selectedData, setSelectedData] = useState<selectedDataType>({
    projectList: [],
    selectedProject: null,
    stageList: [],
    selectedStage: null,
    vehicleList: [],
    selectedVehicle: null,
  });
  const navigate = useNavigate();

  const loadInitial = useCallback(() => {
    //todo load data from backend
    setProjects(PROJECTS_DEFAULT);
    const projectArray: OptionType[] = PROJECTS_DEFAULT.map((project) => {
      return {
        label: project.name,
        value: project.id,
      };
    });
    if (vehicleId !== 0) {
      const findProject = PROJECTS_DEFAULT.find((project) => {
        return project.id === 1;
      });
      const stagesArray: OptionType[] = [
        createOption(findProject!.stages.stage1),
        createOption(findProject!.stages.stage2),
        createOption(findProject!.stages.stage3),
        createOption(findProject!.stages.stage4),
        createOption(findProject!.stages.stage5),
        createOption(findProject!.stages.stage6),
      ];
      const vehicleArray: OptionType[] = EXAMPLE_VEHICLE_DATA.map((vehicle) => {
        return {
          value: vehicle.id,
          label: `${vehicle.carIdentification} - ${vehicle.bodyNo}`,
        };
      });
      const selectedVehicle = vehicleArray.find((vehicle) => {
        return vehicle.value === vehicleId;
      });
      setSelectedData({
        projectList: projectArray,
        selectedProject: projectArray![0],
        stageList: stagesArray,
        selectedStage: stagesArray![0],
        vehicleList: vehicleArray,
        selectedVehicle: selectedVehicle!,
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          projectList: projectArray,
        };
      });
    }
  }, [vehicleId]);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const onProjectSelect = (value: OptionType | null) => {
    if (value) {
      const findProject = projects.find((project) => {
        return project.id === Number(value);
      });
      const findProjectFromArray = selectedData.projectList.find((project) => {
        return project.value === value.value;
      });
      const stagesArray: OptionType[] = [
        createOption(findProject!.stages.stage1),
        createOption(findProject!.stages.stage2),
        createOption(findProject!.stages.stage3),
        createOption(findProject!.stages.stage4),
        createOption(findProject!.stages.stage5),
        createOption(findProject!.stages.stage6),
      ];
      setSelectedData((prevState) => {
        return {
          ...prevState,
          stageList: stagesArray,
          selectedProject: findProjectFromArray!,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedProject: null,
          stageList: [],
          selectedVehicle: null,
          vehicleList: [],
        };
      });
    }
  };

  const onStageSelect = (value: OptionType | null) => {
    if (value) {
      const findVehicles: OptionType[] = EXAMPLE_VEHICLE_DATA.map((vehicle) => {
        return {
          value: vehicle.id,
          label: `${vehicle.carIdentification} - ${vehicle.bodyNo}`,
        };
      });
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedStage: value,
          vehicleList: findVehicles,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          vehicleList: [],
          selectedStage: null,
          selectedVehicle: null,
        };
      });
    }
  };

  const onVehicleSelect = (value: OptionType | null) => {
    if (value) {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedVehicle: value,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedVehicle: null,
        };
      });
    }
  };

  const onSubmitSearch = () => {
    if (
      selectedData.selectedVehicle &&
      selectedData.selectedVehicle.value !== 0
    ) {
      navigate(`/vehicle-search/vehicle/${selectedData.selectedVehicle.value}`);
    }
  };

  return (
    <>
      <FilterMenu pageName={"Vehicle Search"}>
        <SelectSearch
          key={selectedData.selectedProject?.label}
          options={selectedData.projectList}
          onSelect={onProjectSelect}
          label={"Select Project:"}
          defaultValue={
            selectedData.selectedProject
              ? selectedData.selectedProject
              : undefined
          }
        />
        <SelectSearch
          key={selectedData.selectedProject?.value}
          options={selectedData.stageList}
          onSelect={onStageSelect}
          label={"Select stage:"}
          defaultValue={
            selectedData.selectedStage ? selectedData.selectedStage : undefined
          }
          disabled={selectedData.selectedProject === null}
        />
        <SelectSearch
          key={selectedData.selectedStage?.value}
          options={selectedData.vehicleList}
          onSelect={onVehicleSelect}
          label={"Select Vehicle:"}
          defaultValue={
            selectedData.selectedVehicle
              ? selectedData.selectedVehicle
              : undefined
          }
          disabled={selectedData.selectedStage === null}
        />
        <FilledButton
          onClick={onSubmitSearch}
          disabled={!selectedData.selectedVehicle}
        >
          Load Vehicle
        </FilledButton>
      </FilterMenu>
    </>
  );
};

export default VehicleSearchHeader;
