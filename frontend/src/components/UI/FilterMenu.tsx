import { FC, type ReactNode } from "react";

interface FilterMenuProps {
  pageName: string;
  children: ReactNode;
}
const FilterMenu: FC<FilterMenuProps> = ({ pageName, children }) => {
  return (
    <>
      <h1 className="text-left ml-2 text-xl underline">{pageName}</h1>
      <div className="flex my-2 h-22 border-black dark:border-white border-2 rounded-2xl items-end">
        {children}
      </div>
    </>
  );
};

export default FilterMenu;
