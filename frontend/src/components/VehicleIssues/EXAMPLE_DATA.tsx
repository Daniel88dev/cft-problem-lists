export interface Stages {
  Proto: boolean;
  SP1: boolean;
  SP2: boolean;
  LP1: boolean;
  LP2: boolean;
  M: boolean;
}

type DataFormatType = {
  id: number;
  item: number;
  stages: Stages;
  picture: string;
  problemName: string;
  problemDescription: string;
  actionsDone: string;
  counterMeasure: string;
  grade: string;
  class: string;
  status: string;
  responsibility: string;
};
export const EXAMPLE_DATA: DataFormatType[] = [
  {
    id: 1,
    item: 1,
    stages: {
      Proto: false,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: false,
      M: false,
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
      Proto: false,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: false,
      M: false,
    },
    picture: "EXAMPLE_PIC.jpeg",
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
      Proto: false,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: false,
      M: false,
    },
    picture: "EXAMPLE_PIC.jpeg",
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
      Proto: false,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: false,
      M: false,
    },
    picture: "EXAMPLE_PIC.jpeg",
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
      Proto: true,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: true,
      M: true,
    },
    picture: "EXAMPLE_PIC.jpeg",
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
      Proto: false,
      SP1: true,
      SP2: true,
      LP1: true,
      LP2: false,
      M: false,
    },
    picture: "EXAMPLE_PIC.jpeg",
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
