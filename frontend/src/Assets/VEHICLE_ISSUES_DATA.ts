import {
  ListType,
  ProjectTypes,
  VehicleDataType,
  VehicleIssuesType,
} from "../components/VehicleIssues/Store/VehicleIssuesTypes.tsx";
import {
  EXAMPLE_PROBLEM_LIST_DATA,
  PROJECTS_DEFAULT,
} from "./PROBLEM_LIST_DATA.ts";

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

export const EXAMPLE_VEHICLE_ISSUES_DATA: VehicleIssuesType[] = [
  {
    id: 1,
    item: 1,
    vehicleId: {
      id: 1,
      carIdentification: "C01",
      bodyNo: "GTW 123456",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: {
      list: "ELE",
      id: 1,
      item: 1,
      problemName: "First Problem Example",
    },
  },
  {
    id: 2,
    item: 2,
    vehicleId: {
      id: 2,
      carIdentification: "C02",
      bodyNo: "GTW 123458",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: {
      list: "ELE",
      id: 2,
      item: 2,
      problemName: "Second Problem Example",
    },
  },
  {
    id: 3,
    item: 3,
    vehicleId: {
      id: 3,
      carIdentification: "C03",
      bodyNo: "GTW 123459",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: null,
  },
  {
    id: 4,
    item: 4,
    vehicleId: {
      id: 1,
      carIdentification: "C01",
      bodyNo: "GTW 123456",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: null,
  },
  {
    id: 5,
    item: 5,
    vehicleId: {
      id: 2,
      carIdentification: "C02",
      bodyNo: "GTW 123458",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: null,
  },
  {
    id: 6,
    item: 6,
    vehicleId: {
      id: 3,
      carIdentification: "C03",
      bodyNo: "GTW 123459",
      vehicleStage: "LP1",
    },
    picture: "/EXAMPLE_PIC.jpeg",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
    status: "OPEN",
    connectedProblem: null,
  },
];

export const EXAMPLE_VEHICLE_DATA: VehicleDataType[] = [
  {
    id: 1,
    carIdentification: "C01",
    bodyNo: "GTW 123456",
    vehicleStage: "LP1",
  },
  {
    id: 2,
    carIdentification: "C02",
    bodyNo: "GTW 123458",
    vehicleStage: "LP1",
  },
  {
    id: 3,
    carIdentification: "C03",
    bodyNo: "GTW 123459",
    vehicleStage: "LP1",
  },
  {
    id: 4,
    carIdentification: "C01",
    bodyNo: "GTW 122222",
    vehicleStage: "LP2",
  },
  {
    id: 5,
    carIdentification: "C02",
    bodyNo: "GTW 333333",
    vehicleStage: "LP2",
  },
  {
    id: 6,
    carIdentification: "C02",
    bodyNo: "GTW 444444",
    vehicleStage: "LP2",
  },
];

//todo change stages to list

const problems = EXAMPLE_PROBLEM_LIST_DATA.map((problem) => {
  return {
    id: problem.id,
    item: problem.item,
    problemName: problem.problemName,
  };
});

const lists = PROJECTS_DEFAULT[0].lists.map((list) => {
  return {
    listName: list,
    problems: problems,
  };
});

export const EXAMPLE_ProblemListData: ListType[] = lists;
