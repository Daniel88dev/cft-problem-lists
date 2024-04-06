import {
  InitialStateType,
  ListType,
  ProjectTypes,
  VehicleDataType,
  VehicleIssuesContextType,
  VehicleIssuesType,
  VehicleIssueType,
} from "./VehicleIssuesTypes.tsx";
import { createContext, useReducer } from "react";

const initialState: InitialStateType = {
  isInitialLoaded: false,
  isDataLoaded: false,
  isLoading: true,
  projects: [],
  activeProject: undefined,
  filters: {
    filtersApplied: false,
    vehicleId: 0,
  },
  data: {
    vehicleIssues: [],
    vehicles: [],
  },
  selectedProjectProblems: [],
};

export const VehicleIssuesContext =
  createContext<VehicleIssuesContextType | null>(null);

type AddInitialData = {
  type: "ADD_INITIAL_DATA";
  payload: ProjectTypes[];
};

type PayloadForAddIssues = {
  issues: VehicleIssuesType[];
  vehicles: VehicleDataType[];
  projectId: number;
  problemsData: ListType[];
};

type AddIssues = {
  type: "ADD_ISSUES";
  payload: PayloadForAddIssues;
};

type AddLoadingState = {
  type: "SET_LOADING";
};

type Action = AddInitialData | AddIssues | AddLoadingState;

function vehicleIssuesReducer(
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

  if (action.type === "ADD_ISSUES") {
    const findActiveProject = state.projects.find((project) => {
      return project.id === action.payload.projectId;
    });
    return {
      ...state,
      activeProject: findActiveProject,
      data: {
        vehicleIssues: action.payload.issues,
        vehicles: action.payload.vehicles,
      },
      selectedProjectProblems: action.payload.problemsData,
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

  return state;
}

const VehicleIssuesStore = ({ children }: VehicleIssueType) => {
  const [vehicleIssuesState, dispatch] = useReducer(
    vehicleIssuesReducer,
    initialState
  );

  const store: VehicleIssuesContextType = {
    isInitialLoaded: vehicleIssuesState.isInitialLoaded,
    isDataLoaded: vehicleIssuesState.isDataLoaded,
    isLoading: vehicleIssuesState.isLoading,
    projects: vehicleIssuesState.projects,
    activeProject: vehicleIssuesState.activeProject,
    filters: vehicleIssuesState.filters,
    data: vehicleIssuesState.data,
    selectedProjectProblems: vehicleIssuesState.selectedProjectProblems,
    loadInitialData(projects) {
      dispatch({ type: "ADD_INITIAL_DATA", payload: projects });
    },
    loadIssuesData(issues, vehicles, projectId, problemsData) {
      dispatch({
        type: "ADD_ISSUES",
        payload: { issues, vehicles, projectId, problemsData },
      });
    },
    setLoading() {
      dispatch({ type: "SET_LOADING" });
    },
  };
  return (
    <VehicleIssuesContext.Provider value={store}>
      {children}
    </VehicleIssuesContext.Provider>
  );
};

export default VehicleIssuesStore;
