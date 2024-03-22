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

type AddLoadingState = {
  type: "SET_LOADING";
};

type SetFilters = {
  type: "APPLY_FILTERS";
  payload: { vehicleStatusFilters: string[]; colorFilters: string[] };
};

type Action = AddInitialData | AddVehicleData | AddLoadingState | SetFilters;

function vehicleListReducer(
  state: InitialStateType,
  action: Action
): InitialStateType {
  if (action.type === "ADD_INITIAL_DATA") {
    return {
      ...state,
      projects: action.payload,
      isInitialLoaded: true,
      isLoading: false,
    };
  }

  if (action.type === "ADD_VEHICLES_DATA") {
    const findActiveProject = state.projects.find((project) => {
      return project.id === action.payload.projectId;
    });
    const processData: VehicleDataType[] = action.payload.vehicles.map(
      (record) => {
        return record;
      }
    );

    return {
      ...state,
      activeProject: findActiveProject!,
      data: processData,
      isDataLoaded: true,
      isLoading: false,
    };
  }

  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "APPLY_FILTERS") {
    return {
      ...state,
      filters: {
        filtersApplied: !(
          action.payload.vehicleStatusFilters.length === 0 &&
          action.payload.colorFilters.length === 0
        ),
        status: action.payload.vehicleStatusFilters,
        color: action.payload.colorFilters,
      },
    };
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
    setLoading() {
      dispatch({ type: "SET_LOADING" });
    },
    applyFilters(vehicleStatusFilters, colorFilters) {
      dispatch({
        type: "APPLY_FILTERS",
        payload: { vehicleStatusFilters, colorFilters },
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
