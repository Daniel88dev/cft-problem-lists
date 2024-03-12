import {
  ActionType,
  AllUsersType,
  ClassType,
  ProblemListDataType,
  ProjectTypes,
  UserType,
} from "../components/ProblemLists/Store/ProblemListTypes.tsx";

export const USER_DEFAULT: UserType = {
  id: 1,
  name: "John Doe",
  designation: "ASSY ME",
  image:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
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
    name: "John Doe",
    designation: "ASSY ME",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "ASSY PE",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "QC",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "PQ",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "PD",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "PC",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const EXAMPLE_CLASS_DATA: ClassType[] = [
  { class: "Design" },
  { class: "Part" },
  { class: "Equipment" },
  { class: "Workability" },
];

export const EXAMPLE_ACTION_DATA: ActionType[] = [
  { class: "Design", action: "U/Consideration", status: "Open" },
  { class: "Design", action: "Tryout", status: "CM" },
  { class: "Design", action: "EO plan", status: "CM" },
  { class: "Design", action: "EO issued", status: "CM" },
  { class: "Design", action: "W&S (keep)", status: "Closed" },
  { class: "Design", action: "Improved", status: "Closed" },
  { class: "Part", action: "U/Consideration", status: "Open" },
  { class: "Part", action: "Tryout", status: "CM" },
  { class: "Part", action: "W&S (keep)", status: "Closed" },
  { class: "Part", action: "C/M", status: "CM" },
  { class: "Part", action: "Improved", status: "Closed" },
  { class: "Workability", action: "U/Consideration", status: "Open" },
  { class: "Workability", action: "Tryout", status: "CM" },
  { class: "Workability", action: "EO plan", status: "CM" },
  { class: "Workability", action: "EO issued", status: "CM" },
  { class: "Workability", action: "W&S (keep)", status: "Closed" },
  { class: "Workability", action: "C/M", status: "CM" },
  { class: "Workability", action: "Improved", status: "Closed" },
  { class: "Equipment", action: "U/Consideration", status: "Open" },
  { class: "Equipment", action: "C/M", status: "CM" },
  { class: "Equipment", action: "Improved", status: "Closed" },
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
    action: "C/M",
    status: "CM",
    responsibility: {
      id: 1,
      name: "John Doe",
      designation: "ASSY ME",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    listeners: [
      {
        id: 1,
        name: "John Doe",
        designation: "ASSY ME",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
    ],
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
    grade: "S",
    class: "Equipment",
    action: "Improved",
    status: "Closed",
    responsibility: {
      id: 1,
      name: "John Doe",
      designation: "ASSY ME",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    listeners: [],
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
    grade: "S",
    class: "Equipment",
    action: "C/M",
    status: "CM",
    responsibility: {
      id: 5,
      name: "Tyler Durden",
      designation: "PD",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    listeners: [
      {
        id: 3,
        name: "Jane Smith",
        designation: "QC",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "PQ",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
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
    action: "Improved",
    status: "Closed",
    responsibility: {
      id: 5,
      name: "Tyler Durden",
      designation: "PD",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    listeners: [
      {
        id: 1,
        name: "John Doe",
        designation: "ASSY ME",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "ASSY PE",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "QC",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "PQ",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "PD",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora",
        designation: "PC",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ],
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
    action: "U/Consideration",
    status: "Open",
    responsibility: {
      id: 5,
      name: "Tyler Durden",
      designation: "PD",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    listeners: [
      {
        id: 1,
        name: "John Doe",
        designation: "ASSY ME",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "ASSY PE",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "QC",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "PQ",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "PD",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora",
        designation: "PC",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ],
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
    action: "U/Consideration",
    status: "Open",
    responsibility: {
      id: 5,
      name: "Tyler Durden",
      designation: "PD",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    listeners: [
      {
        id: 1,
        name: "John Doe",
        designation: "ASSY ME",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "ASSY PE",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "QC",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "PQ",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "PD",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora",
        designation: "PC",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ],
  },
];

export const STATUS_EXAMPLES = ["Open", "CM", "Closed"];
