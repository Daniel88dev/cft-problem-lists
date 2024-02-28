import {
  AllUsersType,
  ProblemListDataType,
  ProjectTypes,
  UserSettingType,
} from "../Stores/ProblemListStore.tsx";

export const USER_DEFAULT: UserSettingType = {
  id: 1,
  userId: "18105061",
  userName: "Daniel Hrynusiw",
};

export const PROJECTS_DEFAULT: ProjectTypes[] = [
  {
    id: 1,
    name: "First Project",
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    lists: ["ELE", "EXT", "INT", "CHA", "MOV", "Audit"],
  },
  {
    id: 2,
    name: "Second test project",
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    lists: ["ELE", "EXT", "INT", "CHA", "MOV", "Audit"],
  },
  {
    id: 3,
    name: "And one last test project",
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    lists: ["ELE", "EXT", "INT", "CHA", "MOV", "Audit"],
  },
];

export const USERS_DEFAULT: AllUsersType[] = [
  {
    id: 1,
    userId: "18105061",
    userName: "Daniel Hrynusiw",
    avatar: "/EXAMPLE_AVATAR.png",
  },
  {
    id: 2,
    userId: "18105062",
    userName: "Daniel New",
    avatar: "/EXAMPLE_AVATAR.png",
  },
  {
    id: 3,
    userId: "18105063",
    userName: "Daniel Test",
    avatar: "/EXAMPLE_AVATAR.png",
  },
];

export const EXAMPLE_PROBLEM_LIST_DATA: ProblemListDataType[] = [
  {
    id: 1,
    item: 1,
    stages: {
      Stage1: false,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: false,
      Stage6: false,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
  {
    id: 2,
    item: 2,
    stages: {
      Stage1: false,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: false,
      Stage6: false,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
  {
    id: 3,
    item: 3,
    stages: {
      Stage1: false,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: false,
      Stage6: false,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
  {
    id: 4,
    item: 4,
    stages: {
      Stage1: false,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: false,
      Stage6: false,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
  {
    id: 5,
    item: 5,
    stages: {
      Stage1: true,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: true,
      Stage6: true,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
  {
    id: 6,
    item: 6,
    stages: {
      Stage1: false,
      Stage2: true,
      Stage3: true,
      Stage4: true,
      Stage5: false,
      Stage6: false,
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "First Problem Example",
    problemDescription: "Description about problem which happened",
    actionsDone: "Some actions which was done filled by responsible person.",
    counterMeasure: "Action to solve caused problem.",
    grade: "A",
    class: "Equipment",
    status: "NEW",
    responsibility: "Responsible person",
  },
];