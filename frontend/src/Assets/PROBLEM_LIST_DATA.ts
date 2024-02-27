import {
  AllUsersType,
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
