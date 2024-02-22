import { ReactNode } from "react";

type TableType = {
  children: ReactNode;
};

const TableMain = ({ children }: TableType) => {
  return (
    <div className="h-24">
      <div className="overflow-auto" style={{ transform: "scaleY(-1)" }}>
        <table
          className="min-w-max min-h-max"
          style={{ transform: "scaleY(-1)" }}
        >
          {children}
        </table>
      </div>
    </div>
  );
};

export default TableMain;
