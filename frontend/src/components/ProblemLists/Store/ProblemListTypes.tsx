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
  grade: "A" | "B" | "C" | "D" | "S" | "";
  class: string;
  status: string;
  responsibility: string;
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
  userId: string;
  userName: string;
};

export type AllUsersType = {
  id: number;
  userId: string;
  userName: string;
  avatar: string;
};

export type ClassType = {
  class: string;
};

export type ActionType = {
  class: string;
  action: string;
};

export type FormatType = {
  user: UserType;
  allUsers: AllUsersType[];
  projects: ProjectTypes[];
  classes: ClassType[];
  actions: ActionType[];
};

export type UserSettingType = {
  id: number;
  userId: string;
  userName: string;
};

export type InitialStateType = {
  isInitialLoaded: boolean;
  isDataLoaded: boolean;
  isLoading: boolean;
  format: FormatType;
  data: ProblemListDataType[];
  activeProject: ProjectTypes;
};

export type ProblemListContextType = InitialStateType & {
  loadInitialData: (data: FormatType) => void;
  loadProblems: (problems: ProblemListDataType[], projectId: number) => void;
  setLoading: () => void;
  changeProblem: (problem: ProblemListDataType) => void;
};
