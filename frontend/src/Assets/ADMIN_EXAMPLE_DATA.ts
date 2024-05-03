import {
  ActionFormatTypes,
  DesignationListType,
  OrganisationChartMain,
  ProjectType,
  UserType,
} from "../components/AdminPage/AdminTypes.ts";

export const PROJECT_EXAMPLE_DATA: ProjectType[] = [
  {
    id: 1,
    name: "First Project",
    security: "PUBLIC",
    disabled: false,
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    colors: [
      {
        name: "White",
        color: "#ffffff",
        text: "black",
        id: 1,
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
        id: 2,
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
        id: 3,
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
        id: 4,
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
        id: 5,
      },
    ],
    actions: [
      {
        actionId: 1,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 2,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 3,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 4,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 5,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 6,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 7,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 8,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 9,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 1, statusName: "Open" },
        plan: true,
      },
      {
        actionId: 10,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 11,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 12,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 13,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 14,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 15,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 16,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 17,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 18,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 19,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 20,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 21,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
    ],
    problemLists: [
      { problemListId: 1, problemListName: "ELE", type: "BASIC" },
      { problemListId: 2, problemListName: "EXT", type: "BASIC" },
      { problemListId: 3, problemListName: "INT", type: "BASIC" },
      { problemListId: 4, problemListName: "CHA", type: "BASIC" },
      { problemListId: 5, problemListName: "MOV", type: "BASIC" },
      { problemListId: 6, problemListName: "AUDIT", type: "AUDIT" },
    ],
  },
  {
    id: 2,
    name: "Second test project",
    security: "PUBLIC",
    disabled: false,
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    colors: [
      {
        name: "White",
        color: "#ffffff",
        text: "black",
        id: 6,
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
        id: 7,
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
        id: 8,
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
        id: 9,
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
        id: 10,
      },
    ],
    actions: [
      {
        actionId: 22,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 23,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 24,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 25,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 26,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 27,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 28,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 29,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 30,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 1, statusName: "Open" },
        plan: true,
      },
      {
        actionId: 31,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 32,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 33,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 34,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 35,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 36,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 37,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 38,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 39,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 40,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 41,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 42,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
    ],
    problemLists: [
      { problemListId: 7, problemListName: "ELE", type: "BASIC" },
      { problemListId: 8, problemListName: "EXT", type: "BASIC" },
      { problemListId: 9, problemListName: "INT", type: "BASIC" },
      { problemListId: 10, problemListName: "CHA", type: "BASIC" },
      { problemListId: 11, problemListName: "MOV", type: "BASIC" },
      { problemListId: 12, problemListName: "AUDIT", type: "AUDIT" },
    ],
  },
  {
    id: 3,
    name: "And one last test project",
    security: "PUBLIC",
    disabled: false,
    stages: {
      stage1: "Proto",
      stage2: "SP1",
      stage3: "SP2",
      stage4: "LP1",
      stage5: "LP2",
      stage6: "M",
      active: "LP1",
    },
    colors: [
      {
        name: "White",
        color: "#ffffff",
        text: "black",
        id: 11,
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
        id: 12,
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
        id: 13,
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
        id: 14,
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
        id: 15,
      },
    ],
    actions: [
      {
        actionId: 43,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 44,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 45,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 46,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 47,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 48,
        selectedClass: { classId: 1, className: "Design" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 49,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 50,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 51,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 1, statusName: "Open" },
        plan: true,
      },
      {
        actionId: 52,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 53,
        selectedClass: { classId: 2, className: "Part" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 54,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 55,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 2, actionName: "Tryout" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 56,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 3, actionName: "EO plan" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 57,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 4, actionName: "EO issued" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 58,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 5, actionName: "W&S (keep)" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 59,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 60,
        selectedClass: { classId: 3, className: "Workability" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
      {
        actionId: 61,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 1, actionName: "U/Consideration" },
        status: { statusId: 1, statusName: "Open" },
        plan: false,
      },
      {
        actionId: 62,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 6, actionName: "C/M" },
        status: { statusId: 2, statusName: "CM" },
        plan: true,
      },
      {
        actionId: 63,
        selectedClass: { classId: 4, className: "Equipment" },
        action: { actionId: 7, actionName: "Improved" },
        status: { statusId: 3, statusName: "Closed" },
        plan: true,
      },
    ],
    problemLists: [
      { problemListId: 13, problemListName: "ELE", type: "BASIC" },
      { problemListId: 14, problemListName: "EXT", type: "BASIC" },
      { problemListId: 15, problemListName: "INT", type: "BASIC" },
      { problemListId: 16, problemListName: "CHA", type: "BASIC" },
      { problemListId: 17, problemListName: "MOV", type: "BASIC" },
      { problemListId: 18, problemListName: "AUDIT", type: "AUDIT" },
    ],
  },
];

export const ACTION_FORMAT_DEFAULT: ActionFormatTypes = {
  classes: [
    { classId: 1, className: "Design" },
    { classId: 2, className: "Part" },
    { classId: 3, className: "Workability" },
    { classId: 4, className: "Equipment" },
  ],
  actions: [
    { actionId: 1, actionName: "U/Consideration" },
    { actionId: 2, actionName: "Tryout" },
    { actionId: 3, actionName: "EO plan" },
    { actionId: 4, actionName: "EO issued" },
    { actionId: 5, actionName: "W&S (keep)" },
    { actionId: 6, actionName: "C/M" },
    { actionId: 7, actionName: "Improved" },
  ],
  status: [
    { statusId: 1, statusName: "Open" },
    { statusId: 2, statusName: "CM" },
    { statusId: 3, statusName: "Closed" },
  ],
};

export const ALL_USERS_DEFAULT: UserType[] = [
  {
    id: 1,
    name: "John Doe",
    designation: { id: 1, designationName: "ASSY ME" },
    userId: "18100001",
    active: true,
    security: true,
    isAdmin: true,
    isSuperAdmin: true,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: { id: 2, designationName: "ASSY PE" },
    userId: "18100002",
    active: true,
    security: true,
    isAdmin: false,
    isSuperAdmin: false,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: { id: 5, designationName: "QC VQC" },
    userId: "18100003",
    active: true,
    security: true,
    isAdmin: true,
    isSuperAdmin: false,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: { id: 4, designationName: "QC PQ" },
    userId: "18100004",
    active: true,
    security: false,
    isAdmin: false,
    isSuperAdmin: false,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: { id: 8, designationName: "PD" },
    userId: "18100005",
    active: true,
    security: false,
    isAdmin: false,
    isSuperAdmin: false,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: { id: 7, designationName: "PC" },
    userId: "18100006",
    active: true,
    security: false,
    isAdmin: false,
    isSuperAdmin: false,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const DESIGNATIONS_DEFAULT: DesignationListType[] = [
  { id: 1, designationName: "ASSY ME" },
  { id: 2, designationName: "ASSY PE" },
  { id: 3, designationName: "ASSY PD" },
  { id: 4, designationName: "QC PQ" },
  { id: 5, designationName: "QC VQC" },
  { id: 6, designationName: "QC AQD" },
  { id: 7, designationName: "PC" },
  { id: 8, designationName: "PD" },
];

export const ORGANISATION_USER_DEFAULT: OrganisationChartMain = {
  projectName: "Testing Project",
  managerUserList: [
    {
      id: 1,
      name: "John Doe",
      designation: "ASSY ME",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ],
  otherUserList: [
    {
      id: 6,
      name: "Dora",
      designation: "PC",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ],
  problemLists: [
    {
      listName: "ELE",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
    {
      listName: "EXT",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
    {
      listName: "INT",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
    {
      listName: "MOV",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
    {
      listName: "CHA",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
    {
      listName: "AUDIT",
      userList: [
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
          designation: "QC VQC",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "QC PQ",
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
      ],
    },
  ],
};
