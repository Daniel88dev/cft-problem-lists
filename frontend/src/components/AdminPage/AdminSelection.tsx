import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AdminSelection = () => {
  const location = useLocation();
  const locationUpdated = location.pathname.split("/");

  return (
    <div>
      <ul className={"flex justify-center"}>
        <li className={"mx-4"}>
          <Link className={"px-2 hover:underline"} to={"/admin/projects"}>
            Projects
          </Link>
          {locationUpdated[2] === "projects" && (
            <motion.div
              layoutId={"admin-underline"}
              className={"bg-violet-500 h-2 rounded-2xl"}
            />
          )}
        </li>
        <li className={"mx-4"}>
          <Link
            className={"px-2 hover:underline"}
            to={"/admin/project-organisation"}
          >
            Organisation for Project
          </Link>
          {locationUpdated[2] === "project-organisation" && (
            <motion.div
              layoutId={"admin-underline"}
              className={"bg-violet-500 h-2 rounded-2xl"}
            />
          )}
        </li>
        <li className={"mx-4"}>
          <Link className={"px-2 hover:underline"} to={"/admin/users"}>
            Users
          </Link>
          {locationUpdated[2] === "users" && (
            <motion.div
              layoutId={"admin-underline"}
              className={"bg-violet-500 h-2 rounded-2xl"}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default AdminSelection;
