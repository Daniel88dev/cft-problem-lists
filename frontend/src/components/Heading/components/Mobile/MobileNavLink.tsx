import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const MobileNavLink = ({
  children,
  link,
  onClose,
}: {
  children: string;
  link: string;
  onClose: MouseEventHandler<HTMLAnchorElement>;
}) => {
  const match = useMatch(link);

  return (
    <Link
      to={link}
      rel="nofollow"
      onClick={onClose}
      className={
        "block overflow-hidden" + (match?.pathname === link ? " underline" : "")
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

export default MobileNavLink;
