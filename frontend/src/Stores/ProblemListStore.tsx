import { createContext, ReactNode, useContext, useReducer } from "react";

// Setting types

type ProblemListType = {
  children: ReactNode;
};

export type Stages = {
  Stage1: boolean;
  Stage2: boolean;
  Stage3: boolean;
  Stage4: boolean;
  Stage5: boolean;
  Stage6: boolean;
};

export type ProblemListDataType = {
  id: number;
  item: number;
  stages: Stages;
  picture: string;
  problemName: string;
  problemDescription: string;
  actionsDone: string;
  counterMeasure: string;
  grade: string;
  class: string;
  status: string;
  responsibility: string;
};

type StagesNamesType = {
  stage1: string;
  stage2: string;
  stage3: string;
  stage4: string;
  stage5: string;
  stage6: string;
  active: string;
};

export type ProjectTypes = {
  id: number;
  name: string;
  stages: StagesNamesType;
  lists: string[];
};

type UserType = {
  id: number;
  userId: string;
  userName: string;
};

export type AllUsersType = {
  id: number;
  userId: string;
  userName: string;
  avatar: string;
};

type FormatType = {
  user: UserType;
  allUsers: AllUsersType[];
  projects: ProjectTypes[];
};

export type UserSettingType = {
  id: number;
  userId: string;
  userName: string;
};

type InitialStateType = {
  isInitialLoaded: boolean;
  isDataLoaded: boolean;
  format: FormatType;
  data: ProblemListDataType[];
};

type ProblemListContextType = InitialStateType & {
  loadUser: (user: UserSettingType) => void;
  loadInitialData: (data: FormatType) => void;
};

// Setting Context and default values for reducer

const initialState: InitialStateType = {
  isInitialLoaded: false,
  isDataLoaded: false,
  format: {
    user: {
      id: 0,
      userId: "",
      userName: "",
    },
    allUsers: [],
    projects: [],
  },
  data: [],
};

export const ProblemListContext = createContext<ProblemListContextType | null>(
  null
);

export function useProblemListContext() {
  const problemListCtx = useContext(ProblemListContext);

  if (problemListCtx === null) {
    throw new Error("problemListContext is null");
  }
  return problemListCtx;
}

type AddDefaultUser = {
  type: "ADD_DEFAULT_USER";
  payload: UserSettingType;
};

type AddInitialData = {
  type: "ADD_INITIAL_DATA";
  payload: FormatType;
};

type Action = AddDefaultUser | AddInitialData;

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
    format: problemListState.format,
    data: problemListState.data,
    loadUser(user) {
      dispatch({ type: "ADD_DEFAULT_USER", payload: user });
    },
    loadInitialData(data) {
      dispatch({ type: "ADD_INITIAL_DATA", payload: data });
    },
  };
  return (
    <ProblemListContext.Provider value={store}>
      {children}
    </ProblemListContext.Provider>
  );
};

export default ProblemListStore;
