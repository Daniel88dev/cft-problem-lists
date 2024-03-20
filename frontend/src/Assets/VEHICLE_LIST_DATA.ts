import {
  ProjectTypes,
  VehicleDataType,
} from "../components/VehicleLists/Store/VehicleListstypes.tsx";

export const PROJECT_DEFAULT: ProjectTypes[] = [
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

export const EXAMPLE_VEHICLE_DATA: VehicleDataType[] = [
  {
    id: 1,
    carIdentification: "C01",
    bodyNo: "GTW 123456",
    extColor: {
      name: "Red",
      color: "#ed3a3a",
      text: "white",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP1",
    vehicleStatus: "NOT INPUT",
  },
  {
    id: 2,
    carIdentification: "C02",
    bodyNo: "GTW 123458",
    extColor: {
      name: "Gray",
      color: "#737373",
      text: "white",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP1",
    vehicleStatus: "IN PROCESS",
  },
  {
    id: 3,
    carIdentification: "C03",
    bodyNo: "GTW 123459",
    extColor: {
      name: "White",
      color: "#ffffff",
      text: "black",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP1",
    vehicleStatus: "IN PROCESS",
  },
  {
    id: 4,
    carIdentification: "C01",
    bodyNo: "GTW 122222",
    extColor: {
      name: "Red",
      color: "#ed3a3a",
      text: "white",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP2",
    vehicleStatus: "NOT INPUT",
  },
  {
    id: 5,
    carIdentification: "C02",
    bodyNo: "GTW 333333",
    extColor: {
      name: "Gray",
      color: "#737373",
      text: "white",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP2",
    vehicleStatus: "IN PROCESS",
  },
  {
    id: 6,
    carIdentification: "C02",
    bodyNo: "GTW 444444",
    extColor: {
      name: "White",
      color: "#ffffff",
      text: "black",
    },
    vehicleInput: new Date("2024-07-01T13:00:00Z"),
    targetSOff: new Date("2024-07-01T13:00:00Z"),
    specialOptions: ["FRT_RDR", "HUD", "SVM"],
    vehicleStage: "LP2",
    vehicleStatus: "IN PROCESS",
  },
];
