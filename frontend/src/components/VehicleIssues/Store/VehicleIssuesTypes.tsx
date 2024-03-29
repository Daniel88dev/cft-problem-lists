import { ReactNode } from "react";

export type VehicleIssueType = {
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

export type VehicleDataType = {
  id: number;
  carIdentification: string;
  bodyNo: string;
  vehicleStage: string;
};

export type VehicleIssuesType = {
  id: number;
  item: number;
  vehicleId: VehicleDataType;
  picture: string;
  problemName: string;
  problemDescription: string;
  DTCCodes: string[];
  status: "OPEN" | "REPAIRED" | "CANT REPAIR";
};

export type DataType = {
  vehicleIssues: VehicleIssuesType[];
  vehicles: VehicleDataType[];
};

export type ProjectTypes = {
  id: number;
  name: string;
  stages: StagesNamesType;
};

export type FiltersType = {
  filtersApplied: boolean;
  vehicleId: number;
};

export type InitialStateType = {
  isInitialLoaded: boolean;
  isDataLoaded: boolean;
  isLoading: boolean;
  projects: ProjectTypes[];
  activeProject: ProjectTypes | undefined;
  filters: FiltersType;
  data: DataType;
};

export type VehicleIssuesContextType = InitialStateType & {
  loadInitialData: (projects: ProjectTypes[]) => void;
  loadIssuesData: (
    issues: VehicleIssuesType[],
    vehicles: VehicleDataType[],
    projectId: number
  ) => void;
  setLoading: () => void;
};
