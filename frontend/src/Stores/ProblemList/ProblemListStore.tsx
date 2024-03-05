import { createContext, useReducer } from "react";

import {
  ProblemListType,
  ProblemListDataType,
  UserSettingType,
  InitialStateType,
  ProblemListContextType,
  FormatType,
} from "./ProblemListTypes.tsx";
// Setting Context and default values for reducer

const initialState: InitialStateType = {
  isInitialLoaded: false,
  isDataLoaded: false,
  isLoading: true,
  format: {
    user: {
      id: 0,
      userId: "",
      userName: "",
    },
    allUsers: [],
    projects: [],
    classes: [],
    actions: [],
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
};

export const ProblemListContext = createContext<ProblemListContextType | null>(
  null
);

type AddDefaultUser = {
  type: "ADD_DEFAULT_USER";
  payload: UserSettingType;
};

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

type Action = AddDefaultUser | AddInitialData | AddProblems | AddLoadingState;

function problemListReducer(
  state: InitialStateType,
  action: Action
): InitialStateType {
  if (action.type === "ADD_DEFAULT_USER") {
    return {
      ...state,
      isInitialLoaded: true,
      format: {
        ...state.format,
        user: {
          id: action.payload.id,
          userId: action.payload.userId,
          userName: action.payload.userName,
        },
      },
    };
  }

  if (action.type === "ADD_INITIAL_DATA") {
    return {
      ...state,
      format: {
        user: action.payload.user,
        allUsers: action.payload.allUsers,
        projects: action.payload.projects,
        classes: action.payload.classes,
        actions: action.payload.actions,
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
    loadUser(user) {
      dispatch({ type: "ADD_DEFAULT_USER", payload: user });
    },
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
  };
  return (
    <ProblemListContext.Provider value={store}>
      {children}
    </ProblemListContext.Provider>
  );
};

export default ProblemListStore;
