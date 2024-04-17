import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const NavLink = ({
  children,
  link,
  menu,
}: {
  children: string;
  link: string;
  menu: string;
}) => {
  const match = useMatch(link);

  const destination = match?.pathname.split("/");

  return (
    <Link
      to={link}
      rel="nofollow"
      className={
        "block overflow-hidden text-nowrap pr-4" +
        (destination && destination[1] === menu
          ? " underline dark:text-white"
          : "")
      }
    >
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

export default NavLink;
