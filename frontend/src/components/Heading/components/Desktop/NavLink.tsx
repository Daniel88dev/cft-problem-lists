import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const NavLink = ({
  children,
  link,
  width,
}: {
  children: string;
  link: string;
  width: string;
}) => {
  const match = useMatch(link);
  console.log(match?.pathname);

  return (
    <Link
      to={link}
      rel="nofollow"
      className={
        "block overflow-hidden w-28" +
        width +
        (match?.pathname === link ? " underline dark:text-white" : "")
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
