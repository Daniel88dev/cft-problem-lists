import { ReactNode } from "react";

type TableRowType = {
  children: ReactNode;
};

const TableRow = ({ children }: TableRowType) => {
  return (
    <tr className="h-48 even:bg-violet-200 even:dark:bg-gray-900">
      {children}
    </tr>
  );
};

export default TableRow;
