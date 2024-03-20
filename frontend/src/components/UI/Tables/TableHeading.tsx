import { ReactNode } from "react";

type TableHeadingType = {
  children: ReactNode;
};

const TableHeading = ({ children }: TableHeadingType) => {
  return (
    <thead className="sticky z-10 top-0 bg-violet-200 dark:bg-gray-800">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeading;
