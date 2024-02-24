import { ReactNode } from "react";

type TableType = {
  children: ReactNode;
};

const TableMain = ({ children }: TableType) => {
  return (
    <div className="z-0">
      <div>
        <table className="min-w-max min-h-max">{children}</table>
      </div>
    </div>
  );
};

export default TableMain;
