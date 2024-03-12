import { createContext, useReducer } from "react";

import {
  ProblemListType,
  ProblemListDataType,
  InitialStateType,
  ProblemListContextType,
  FormatType,
  AllUsersType,
} from "./ProblemListTypes.tsx";
// Setting Context and default values for reducer

const initialState: InitialStateType = {
  isInitialLoaded: false,
  isDataLoaded: false,
  isLoading: true,
  format: {
    user: {
      id: 0,
      name: "",
      designation: "",
      image: "",
    },
    allUsers: [],
    projects: [],
    classes: [],
    actions: [],
    status: [],
  },
  data: [],
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
    lists: [],
  },
  filters: {
    filtersApplied: false,
    status: [],
    grade: [],
  },
};

export const ProblemListContext = createContext<ProblemListContextType | null>(
  null
);

type AddInitialData = {
  type: "ADD_INITIAL_DATA";
  payload: FormatType;
};

type PayloadForAddProblems = {
  problems: ProblemListDataType[];
  projectId: number;
};

type AddProblems = {
  type: "ADD_PROBLEMS";
  payload: PayloadForAddProblems;
};

type AddLoadingState = {
  type: "SET_LOADING";
};

type ChangeProblem = {
  type: "CHANGE_PROBLEM";
  payload: ProblemListDataType;
};

type Subscribe = {
  type: "SUBSCRIBE";
  payload: { itemId: number };
};

type Unsubscribe = {
  type: "UNSUBSCRIBE";
  payload: { itemId: number };
};

type SetFilters = {
  type: "APPLY_FILTERS";
  payload: { statusFilters: string[]; gradeFilters: string[] };
};

type Action =
  | AddInitialData
  | AddProblems
  | AddLoadingState
  | ChangeProblem
  | Subscribe
  | Unsubscribe
  | SetFilters;

function problemListReducer(
  state: InitialStateType,
  action: Action
): InitialStateType {
  if (action.type === "ADD_INITIAL_DATA") {
    return {
      ...state,
      format: {
        user: action.payload.user,
        allUsers: action.payload.allUsers,
        projects: action.payload.projects,
        classes: action.payload.classes,
        actions: action.payload.actions,
        status: action.payload.status,
      },
      isInitialLoaded: true,
      isLoading: false,
    };
  }

  if (action.type === "ADD_PROBLEMS") {
    const findActiveProject = state.format.projects.find((project) => {
      return project.id === action.payload.projectId;
    });
    const processData: ProblemListDataType[] = action.payload.problems.map(
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

  if (action.type === "CHANGE_PROBLEM") {
    const NewProblemsArray = state.data.map((problem) => {
      if (problem.id === action.payload.id) {
        return action.payload;
      } else {
        return problem;
      }
    });
    return {
      ...state,
      data: NewProblemsArray,
    };
  }

  if (action.type === "SUBSCRIBE") {
    const findProblem = state.data.find((problem) => {
      return problem.id === action.payload.itemId;
    });
    const updatedProblem = {
      ...findProblem,
      listeners: [...findProblem!.listeners, { ...state.format.user }],
    };
    const newProblems = state.data.map((problem) => {
      if (problem.id === action.payload.itemId) {
        return updatedProblem;
      } else {
        return problem;
      }
    });
    return {
      ...state,
      data: newProblems as ProblemListDataType[],
    };
  }

  if (action.type === "UNSUBSCRIBE") {
    const findProblem = state.data.find((problem) => {
      return problem.id === action.payload.itemId;
    });
    const newListeners: AllUsersType[] = [];
    findProblem!.listeners.map((listener) => {
      if (listener.id !== state.format.user.id) {
        return newListeners.push(listener);
      } else {
        return;
      }
    });
    const updatedProblem = {
      ...findProblem,
      listeners: newListeners,
    };
    const newProblems = state.data.map((problem) => {
      if (problem.id === action.payload.itemId) {
        return updatedProblem;
      } else {
        return problem;
      }
    });
    return {
      ...state,
      data: newProblems as ProblemListDataType[],
    };
  }

  if (action.type === "APPLY_FILTERS") {
    return {
      ...state,
      filters: {
        filtersApplied: !(
          action.payload.statusFilters.length === 0 &&
          action.payload.gradeFilters.length === 0
        ),
        status: action.payload.statusFilters,
        grade: action.payload.gradeFilters,
      },
    };
  }

  return state;
}

const ProblemListStore = ({ children }: ProblemListType) => {
  const [problemListState, dispatch] = useReducer(
    problemListReducer,
    initialState
  );

  const store: ProblemListContextType = {
    isInitialLoaded: problemListState.isInitialLoaded,
    isDataLoaded: problemListState.isDataLoaded,
    isLoading: problemListState.isLoading,
    format: problemListState.format,
    data: problemListState.data,
    activeProject: problemListState.activeProject,
    filters: problemListState.filters,
    loadInitialData(data) {
      dispatch({ type: "ADD_INITIAL_DATA", payload: data });
    },
    loadProblems(problems, projectId) {
      dispatch({
        type: "ADD_PROBLEMS",
        payload: {
          problems: problems,
          projectId: projectId,
        },
      });
    },
    setLoading() {
      dispatch({ type: "SET_LOADING" });
    },
    changeProblem(problem) {
      dispatch({
        type: "CHANGE_PROBLEM",
        payload: problem,
      });
    },
    setSubscribed(itemId) {
      dispatch({ type: "SUBSCRIBE", payload: { itemId } });
    },
    setUnsubscribed(itemId) {
      dispatch({ type: "UNSUBSCRIBE", payload: { itemId } });
    },
    applyFilters(statusFilters, gradeFilters) {
      dispatch({
        type: "APPLY_FILTERS",
        payload: { statusFilters, gradeFilters },
      });
    },
  };
  return (
    <ProblemListContext.Provider value={store}>
      {children}
    </ProblemListContext.Provider>
  );
};

export default ProblemListStore;
