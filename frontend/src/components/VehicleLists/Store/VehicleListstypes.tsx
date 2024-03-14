import { ReactNode } from "react";

export type VehicleListType = {
  children: ReactNode;
};

export type StagesNamesType = {
  stage1: string;
  stage2: string;
  stage3: string;
  stage4: string;
  stage5: string;
  stage6: string;
  active: string;
};

export type ExtColorsType = {
  name: string;
  color: string;
  text: string;
};

export type ProjectTypes = {
  id: number;
  name: string;
  stages: StagesNamesType;
  colors: ExtColorsType[];
};

export type VehicleStatusType =
  | "NOT INPUT"
  | "IN PROCESS"
  | "DURABILITY"
  | "DELAYED"
  | "FINISHED";

export type VehicleDataType = {
  id: number;
  carIdentification: string;
  bodyNo: string;
  extColor: ExtColorsType;
  vehicleInput: Date;
  targetSOff: Date;
  specialOptions: string[];
  vehicleStage: string;
  vehicleStatus: VehicleStatusType;
};

export type FiltersType = {
  filtersApplied: boolean;
  status: VehicleStatusType[];
  color: string[];
  stage: string[];
};

export type InitialStateType = {
  isInitialLoaded: boolean;
  isDataLoaded: boolean;
  isLoading: boolean;
  projects: ProjectTypes[];
  data: VehicleDataType[];
  filters: FiltersType;
  activeProject: ProjectTypes;
};

export type VehicleListContextType = InitialStateType & {
  loadInitialData: (data: ProjectTypes[]) => void;
  loadVehicles: (vehicles: VehicleDataType[], projectId: number) => void;
};
