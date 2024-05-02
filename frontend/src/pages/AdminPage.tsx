import AdminSelection from "../components/AdminPage/AdminSelection.tsx";
import AdminProjectSelection from "../components/AdminPage/Project/AdminProjectSelection.tsx";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectType } from "../components/AdminPage/AdminTypes.ts";
import { PROJECT_EXAMPLE_DATA } from "../Assets/ADMIN_EXAMPLE_DATA.ts";
import AdminProjectEdit from "../components/AdminPage/Project/AdminProjectEdit.tsx";
import AdminUserList from "../components/AdminPage/Users/AdminUserList.tsx";
import OrganisationProjectSelection from "../components/AdminPage/Organisation/OrganisationProjectSelection.tsx";
import OrganisationProjectView from "../components/AdminPage/Organisation/OrganisationProjectView.tsx";

export type MenuType =
  | "projects"
  | "users"
  | "project-organisation"
  | undefined;

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
    if (locationUpdated[2] === "projects") {
      if (selectedMenu !== "projects") {
        setSelectedMenu("projects");
        setProjectEditData(null);
      }
    } else if (locationUpdated[2] === "users") {
      setSelectedMenu("users");
      setProjectEditData(null);
    } else if (locationUpdated[2] === "project-organisation") {
      setSelectedMenu("project-organisation");
      setProjectEditData(null);
    }
  }, [location, selectedMenu]);

  return (
    <>
      <AdminSelection />
      {selectedMenu === "projects" && <AdminProjectSelection />}
      {selectedMenu === "projects" && projectEditData && (
        <AdminProjectEdit
          key={`project${projectEditData.id}`}
          data={projectEditData}
        />
      )}
      {selectedMenu === "project-organisation" && (
        <OrganisationProjectSelection />
      )}
      {selectedMenu === "project-organisation" && <OrganisationProjectView />}
      {selectedMenu === "users" && <AdminUserList />}
    </>
  );
};

export default AdminPage;
