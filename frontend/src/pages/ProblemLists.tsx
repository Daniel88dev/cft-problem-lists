import { createContext } from "react";

export interface ProblemListContextType {
  data: string;
  format: string;
  user: string;
}

const ProblemListContext = createContext<ProblemListContextType | null>(null);

const ProblemLists = () => {
  const contextValues = {
    data: "data loaded from backend",
    format:
      "format data for heading, and some values, which can be different based on selection",
    user: "User specific settings",
  };

  return (
    <ProblemListContext.Provider value={contextValues}>
      <h1>Problem Lists</h1>
    </ProblemListContext.Provider>
  );
};

export default ProblemLists;
