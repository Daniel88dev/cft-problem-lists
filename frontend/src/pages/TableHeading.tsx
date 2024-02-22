import { ReactNode } from "react";

type TableHeadingType = {
  children: ReactNode;
};

const TableHeading = ({ children }: TableHeadingType) => {
  return (
    <thead className="sticky top-0">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeading;
