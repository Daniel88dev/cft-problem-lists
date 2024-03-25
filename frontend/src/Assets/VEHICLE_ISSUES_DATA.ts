import {
  ProjectTypes,
  VehicleIssuesType,
} from "../components/VehicleIssues/Store/VehicleIssuesTypes.tsx";

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
    picture: "",
    problemName: "Some issue on vehicle",
    problemDescription: "Description in detail for vehicle issue.",
    DTCCodes: ["P1000", "P2500"],
  },
];
