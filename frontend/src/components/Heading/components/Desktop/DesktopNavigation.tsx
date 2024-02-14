import ThemeSwitcher from "../ThemeSwitcher.tsx";
import { HeadingObjectType } from "../../Heading.tsx";
import Logo from "../Logo.tsx";
import ProfileButton from "./ProfileButton.tsx";
import NavLink from "./NavLink.tsx";

const DesktopNavigation = ({ data }: { data: HeadingObjectType[] }) => {
  return (
    <nav className="fixed left-[50%] top-4 hidden md:flex -translate-x-[50%] items-center gap-4 rounded-lg border-[1px] border-neutral-700 bg-violet-600 dark:bg-neutral-900 p-2 text-sm text-white dark:text-neutral-500">
      <Logo />

      {data.map((dat) => (
        <NavLink key={dat.id} link={dat.link}>
          {dat.name}
        </NavLink>
      ))}

      <ThemeSwitcher />

      <ProfileButton />
    </nav>
  );
};

export default DesktopNavigation;
