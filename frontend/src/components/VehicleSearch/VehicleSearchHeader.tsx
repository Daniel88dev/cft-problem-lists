import FilterMenu from "../UI/FilterMenu.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectTypes } from "../ProblemLists/Store/ProblemListTypes.tsx";
import { PROJECTS_DEFAULT } from "../../Assets/PROBLEM_LIST_DATA.ts";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import { EXAMPLE_VEHICLE_DATA } from "../../Assets/VEHICLE_ISSUES_DATA.ts";
import { createOption } from "../VehicleIssues/components/createOption.ts";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import { useNavigate } from "react-router-dom";
import InputText from "../UI/Input/InputText.tsx";

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
  const scanBarcode = useRef<HTMLInputElement>(null);
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
        return project.id === Number(value.value);
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
          vehicleList: [],
          selectedVehicle: null,
          selectedStage: null,
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

  const onBarcodeSearch = () => {
    if (scanBarcode.current) {
      const barcodeData = scanBarcode.current.value;
      const barcodeSplit = barcodeData.split(" ");
      if (barcodeSplit[0].length !== 3 && barcodeSplit[1].length !== 6) {
        return alert("Enter valid vehicle body no!");
      }
      const reformatedBodyNo = `${barcodeSplit[0].toUpperCase()} ${
        barcodeSplit[1]
      }`;
      const findVehicle = EXAMPLE_VEHICLE_DATA.find((vehicle) => {
        return vehicle.bodyNo === reformatedBodyNo;
      });
      console.log(findVehicle);
      const projectArray: OptionType[] = PROJECTS_DEFAULT.map((project) => {
        return {
          label: project.name,
          value: project.id,
        };
      });
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
      const findVehicleFromArray = vehicleArray.find((vehicle) => {
        return vehicle.value === findVehicle!.id;
      });
      setSelectedData({
        selectedStage: stagesArray[0],
        selectedProject: projectArray[0],
        selectedVehicle: findVehicleFromArray!,
        projectList: projectArray,
        stageList: stagesArray,
        vehicleList: vehicleArray,
      });
      navigate(`/vehicle-search/vehicle/${findVehicleFromArray!.value}`);
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
        <InputText id={"barcode"} label={"Scan barcode:"} ref={scanBarcode} />
        <FilledButton onClick={onBarcodeSearch}>Load Barcode</FilledButton>
      </FilterMenu>
    </>
  );
};

export default VehicleSearchHeader;
