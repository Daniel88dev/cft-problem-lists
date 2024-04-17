import DesktopNavigation from "./components/Desktop/DesktopNavigation.tsx";
import MobileNavigation from "./components/Mobile/MobileNavigation.tsx";

export type HeadingObjectType = {
  id: number;
  name: string;
  link: string;
  menu: string;
};

export const Heading = () => {
  const HeadingObjects: HeadingObjectType[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
      menu: "",
    },
    {
      id: 2,
      name: "Problem-lists",
      link: "/problem-lists",
      menu: "problem-lists",
    },
    {
      id: 3,
      name: "Vehicle-lists",
      link: "/vehicle-lists",
      menu: "vehicle-lists",
    },
    {
      id: 4,
      name: "Vehicle-issues",
      link: "/vehicle-issues",
      menu: "vehicle-issues",
    },
    {
      id: 5,
      name: "Problem-search",
      link: "/problem-search/problem/0",
      menu: "problem-search",
    },
    {
      id: 6,
      name: "Vehicle-search",
      link: "/vehicle-search/vehicle/0",
      menu: "vehicle-search",
    },
    {
      id: 7,
      name: "Admin",
      link: "/admin",
      menu: "admin",
    },
    {
      id: 8,
      name: "UI Components",
      link: "/ui-components",
      menu: "ui-components",
    },
  ];

  return (
    <header className="absolute bg-white dark:bg-gray-800 z-10 inset-x-0 top-0 h-24 w-full">
      <DesktopNavigation data={HeadingObjects} />
      <MobileNavigation data={HeadingObjects} />
    </header>
  );
};
