import { ProjectChartData } from "../components/Charts/ChartTypes.ts";

export const EXAMPLE_CHART_PROJECT_DATA: ProjectChartData = {
  projectId: 1,
  projectName: "Testing Project",
  problemLists: [
    { listId: 1, problemListName: "ELE" },
    { listId: 2, problemListName: "EXT" },
    { listId: 3, problemListName: "INT" },
    { listId: 4, problemListName: "CHA" },
    { listId: 5, problemListName: "MOV" },
    { listId: 6, problemListName: "AUDIT" },
  ],
  categories: [
    { categoryId: 1, categoryName: "OPEN" },
    { categoryId: 2, categoryName: "CM" },
    { categoryId: 3, categoryName: "CLOSED" },
  ],
  projectData: [
    {
      listName: "ELE",
      data: [
        { category: "OPEN", issues: 34 },
        { category: "CM", issues: 12 },
        { category: "CLOSED", issues: 16 },
      ],
    },
    {
      listName: "EXT",
      data: [
        { category: "OPEN", issues: 49 },
        { category: "CM", issues: 17 },
        { category: "CLOSED", issues: 23 },
      ],
    },
    {
      listName: "INT",
      data: [
        { category: "OPEN", issues: 39 },
        { category: "CM", issues: 65 },
        { category: "CLOSED", issues: 11 },
      ],
    },
    {
      listName: "CHA",
      data: [
        { category: "OPEN", issues: 49 },
        { category: "CM", issues: 78 },
        { category: "CLOSED", issues: 13 },
      ],
    },
    {
      listName: "MOV",
      data: [
        { category: "OPEN", issues: 11 },
        { category: "CM", issues: 99 },
        { category: "CLOSED", issues: 1 },
      ],
    },
    {
      listName: "AUDIT",
      data: [
        { category: "OPEN", issues: 22 },
        { category: "CM", issues: 0 },
        { category: "CLOSED", issues: 66 },
      ],
    },
  ],
};
