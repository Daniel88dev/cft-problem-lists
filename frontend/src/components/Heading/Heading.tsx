import DesktopNavigation from "./components/Desktop/DesktopNavigation.tsx";
import MobileNavigation from "./components/Mobile/MobileNavigation.tsx";

export type HeadingObjectType = {
  id: number;
  name: string;
  link: string;
};

export const Heading = () => {
  const HeadingObjects: HeadingObjectType[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Problem-lists",
      link: "/problem-lists",
    },
    {
      id: 3,
      name: "Vehicle-lists",
      link: "/vehicle-lists",
    },
    {
      id: 4,
      name: "Vehicle-issues",
      link: "/vehicle-issues",
    },
    {
      id: 5,
      name: "test",
      link: "/test",
    },
    {
      id: 6,
      name: "Longer test",
      link: "/anothertest",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 h-24">
      <DesktopNavigation data={HeadingObjects} />
      <MobileNavigation data={HeadingObjects} />
    </header>
  );
};
