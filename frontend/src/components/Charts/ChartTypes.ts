export type IssueType = {
  category: string;
  issues: number;
};

export type ProblemListDataType = {
  listName: string;
  data: IssueType[];
};

type ProblemListType = {
  listId: number;
  problemListName: string;
};

type CategoriesType = {
  categoryId: number;
  categoryName: string;
};

export type ProjectChartData = {
  projectId: number;
  projectName: string;
  categories: CategoriesType[];
  problemLists: ProblemListType[];
  projectData: ProblemListDataType[];
};
