import { createContext, useReducer } from "react";
import {
  InitialStateType,
  ProjectTypes,
  VehicleDataType,
  VehicleListContextType,
  VehicleListType,
} from "./VehicleListstypes.tsx";

const initialState: InitialStateType = {
  isInitialLoaded: false,
  isDataLoaded: false,
  isLoading: false,
  projects: [],
  data: [],
  filters: {
    filtersApplied: false,
    status: [],
    color: [],
    stage: [],
  },
  activeProject: {
    id: 0,
    name: "",
    stages: {
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "",
      stage6: "",
      active: "",
    },
    colors: [],
  },
};

export const VehicleListContext = createContext<VehicleListContextType | null>(
  null
);

type AddInitialData = {
  type: "ADD_INITIAL_DATA";
  payload: ProjectTypes[];
};

type PayloadForAddVehicles = {
  vehicles: VehicleDataType[];
  projectId: number;
};

type AddVehicleData = {
  type: "ADD_VEHICLES_DATA";
  payload: PayloadForAddVehicles;
};

type Action = AddInitialData | AddVehicleData;

function vehicleListReducer(
  state: InitialStateType,
  action: Action
): InitialStateType {
  if (action.type === "ADD_INITIAL_DATA") {
    // TODO add logic
    return state;
  }

  if (action.type === "ADD_VEHICLES_DATA") {
    // TODO add logic
    return state;
  }

  return state;
}

const VehicleListStore = ({ children }: VehicleListType) => {
  const [vehicleListState, dispatch] = useReducer(
    vehicleListReducer,
    initialState
  );

  const store: VehicleListContextType = {
    isInitialLoaded: vehicleListState.isInitialLoaded,
    isDataLoaded: vehicleListState.isDataLoaded,
    isLoading: vehicleListState.isLoading,
    projects: vehicleListState.projects,
    data: vehicleListState.data,
    activeProject: vehicleListState.activeProject,
    filters: vehicleListState.filters,
    loadInitialData(data) {
      dispatch({ type: "ADD_INITIAL_DATA", payload: data });
    },
    loadVehicles(vehicles, projectId) {
      dispatch({
        type: "ADD_VEHICLES_DATA",
        payload: {
          vehicles: vehicles,
          projectId: projectId,
        },
      });
    },
  };
  return (
    <VehicleListContext.Provider value={store}>
      {children}
    </VehicleListContext.Provider>
  );
};

export default VehicleListStore;
