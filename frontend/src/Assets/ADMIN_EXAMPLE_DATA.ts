import { ProjectType } from "../components/AdminPage/Project/AdminTypes.ts";

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
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
      },
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
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
      },
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
      },
      {
        name: "Black",
        color: "#252329",
        text: "white",
      },
      {
        name: "Red",
        color: "#ed3a3a",
        text: "white",
      },
      {
        name: "Dark red",
        color: "#771d1d",
        text: "white",
      },
      {
        name: "Gray",
        color: "#737373",
        text: "white",
      },
    ],
  },
];
