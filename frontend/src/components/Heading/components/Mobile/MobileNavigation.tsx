import { useState } from "react";
import { HeadingObjectType } from "../../Heading.tsx";
import ThemeSwitcher from "../ThemeSwitcher.tsx";
import Logo from "../Logo.tsx";
import MobileNavLink from "./MobileNavLink.tsx";

const MobileNavigation = ({ data }: { data: HeadingObjectType[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  const BtnClick = () => {
    setOpen((prevState) => !prevState);
  };

  const NavClicked = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex left-0 right-0 top-0 md:hidden justify-end gap-6 bg-violet-500 dark:bg-black pr-8">
        <div className="flex items-center gap-2 w-full">
          <Logo />
        </div>
        <ThemeSwitcher />
        <button
          onClick={BtnClick}
          className={
            "z-40 block hamburger md:hidden focus:outline-none content-center" +
            (open ? " open" : "")
          }
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className={
          "absolute z-10 top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-24 space-y-3 text-lg text-white uppercase bg-violet-500 dark:bg-black" +
          (open ? " flex" : " hidden")
        }
      >
        {data.map((dat) => (
          <MobileNavLink key={dat.id} link={dat.link} onClose={NavClicked}>
            {dat.name}
          </MobileNavLink>
        ))}
      </div>
    </>
  );
};

export default MobileNavigation;
