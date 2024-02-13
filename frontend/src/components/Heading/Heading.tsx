import DesktopNavigation from "./components/Desktop/DesktopNavigation.tsx";
import MobileNavigation from "./components/Mobile/MobileNavigation.tsx";

export type HeadingObjectType = {
  id: number;
  name: string;
  link: string;
  width: string;
};

export const Heading = () => {
  const HeadingObjects: HeadingObjectType[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
      width: " w-10",
    },
    {
      id: 2,
      name: "Problem-lists",
      link: "/problem-lists",
      width: " w-24",
    },
    {
      id: 3,
      name: "Vehicle-lists",
      link: "/vehicle-lists",
      width: " w-24",
    },
    {
      id: 4,
      name: "Vehicle-issues",
      link: "/vehicle-issues",
      width: " w-28",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0">
      <DesktopNavigation data={HeadingObjects} />
      <MobileNavigation data={HeadingObjects} />
    </header>
  );
};
