export type ColorType = {
  name: string | null;
  color: string | null;
  text: "white" | "black";
  id: number;
};

export type StagesType = {
  stage1: string | null;
  stage2: string | null;
  stage3: string | null;
  stage4: string | null;
  stage5: string | null;
  stage6: string | null;
  active: string | null;
};

export type ClassType = {
  classId: number;
  className: string;
};

export type ActionType = {
  actionId: number;
  actionName: string;
};

export type StatusType = {
  statusId: number;
  statusName: string;
};

export type ProblemListType = {
  problemListId: number;
  problemListName: string;
  type: "BASIC" | "AUDIT";
};

export type ActionFormatTypes = {
  classes: ClassType[];
  actions: ActionType[];
  status: StatusType[];
};

export type ProjectActionTypes = {
  actionId: number;
  selectedClass: ClassType;
  action: ActionType;
  status: StatusType;
  plan: boolean;
};

export type ProjectType = {
  id: number;
  name: string;
  stages: StagesType;
  colors: ColorType[];
  security: "SECURED" | "PUBLIC";
  disabled: boolean;
  actions: ProjectActionTypes[];
  problemLists: ProblemListType[];
};

export type DesignationListType = {
  id: number;
  designationName: string;
};

export type UserType = {
  id: number;
  userId: string;
  name: string;
  image: string;
  designation: DesignationListType;
  active: boolean;
  security: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
};

export type OrganisationUserType = {
  id: number;
  image: string;
  name: string;
  designation: string;
};

export type OrganisationChartList = {
  listName: string;
  userList: OrganisationUserType[];
};

export type OrganisationChartMain = {
  managerUserList: OrganisationUserType[];
  otherUserList: OrganisationUserType[];
  problemLists: OrganisationChartList[];
};
