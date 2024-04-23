import AdminSelection from "../components/AdminPage/AdminSelection.tsx";
import AdminProjectSelection from "../components/AdminPage/Project/AdminProjectSelection.tsx";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectType } from "../components/AdminPage/Project/AdminTypes.ts";
import { PROJECT_EXAMPLE_DATA } from "../Assets/ADMIN_EXAMPLE_DATA.ts";
import AdminProjectEdit from "../components/AdminPage/Project/AdminProjectEdit.tsx";

export type MenuType = "projects" | "users" | undefined;

const AdminPage = () => {
  const { projectId } = useParams();
  const [projectEditData, setProjectEditData] = useState<ProjectType | null>(
    null
  );
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(undefined);
  const location = useLocation();

  useEffect(() => {
    if (projectId && Number(projectId) !== 0) {
      const findProject = PROJECT_EXAMPLE_DATA.find((project) => {
        return project.id === Number(projectId);
      });
      setProjectEditData(findProject!);
    }
  }, [projectId]);

  useEffect(() => {
    const locationUpdated = location.pathname.split("/");
    if (locationUpdated[2] === "projects" || locationUpdated[2] === "users") {
      setSelectedMenu(locationUpdated[2]);
    }
  }, [location]);

  return (
    <>
      <AdminSelection />
      {selectedMenu === "projects" && <AdminProjectSelection />}
      {selectedMenu === "projects" && projectEditData && (
        <AdminProjectEdit data={projectEditData} />
      )}
    </>
  );
};

export default AdminPage;
