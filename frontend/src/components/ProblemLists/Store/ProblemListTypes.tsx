import { ReactNode } from "react";

// Setting types

export type ProblemListType = {
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
  projectId: number;
  list: string;
  grade: "A" | "B" | "C" | "D" | "S" | "";
  class: string;
  action: string;
  status: string;
  plan: Date | undefined;
  responsibility: UserType;
  listeners: AllUsersType[];
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

export type ProjectTypes = {
  id: number;
  name: string;
  stages: StagesNamesType;
  lists: string[];
};

export type UserType = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export type AllUsersType = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export type ClassType = {
  class: string;
};

export type ActionType = {
  class: string;
  action: string;
  status: string;
  plan: boolean;
};

export type FiltersType = {
  filtersApplied: boolean;
  status: string[];
  grade: string[];
};

export type FormatType = {
  user: UserType;
  allUsers: AllUsersType[];
  projects: ProjectTypes[];
  classes: ClassType[];
  actions: ActionType[];
  status: string[];
};

export type InitialStateType = {
  isInitialLoaded: boolean;
  isDataLoaded: boolean;
  isLoading: boolean;
  format: FormatType;
  data: ProblemListDataType[];
  activeProject: ProjectTypes;
  filters: FiltersType;
};

export type ProblemListContextType = InitialStateType & {
  loadInitialData: (data: FormatType) => void;
  loadProblems: (problems: ProblemListDataType[], projectId: number) => void;
  setLoading: () => void;
  changeProblem: (problem: ProblemListDataType) => void;
  setSubscribed: (itemId: number) => void;
  setUnsubscribed: (itemId: number) => void;
  applyFilters: (statusFilters: string[], gradeFilters: string[]) => void;
  registerProblem: (problem: ProblemListDataType) => void;
};
