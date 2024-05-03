import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { OrganisationChartMain } from "../AdminTypes.ts";
import { ORGANISATION_USER_DEFAULT } from "../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import OrganisationList from "./components/OrganisationList.tsx";

const OrganisationProjectView = () => {
  const [projectData, setProjectData] = useState<OrganisationChartMain | null>(
    null
  );
  const { projectId } = useParams();

  const loadProjectData = useCallback((id: number) => {
    if (id !== 0) {
      const data = ORGANISATION_USER_DEFAULT;
      setProjectData(data);
    }
  }, []);

  useEffect(() => {
    if (projectId && Number(projectId) !== 0) {
      loadProjectData(Number(projectId));
    }
  }, [loadProjectData, projectId]);

  console.log(projectData);

  return (
    <div className={"flex-col"}>
      {projectData && (
        <>
          <h1 className={"text-2xl text-left underline px-2"}>
            {projectData?.projectName} Organisation Chart
          </h1>
          <div className={"flex justify-center"}>
            <OrganisationList
              listName={"Management"}
              userList={projectData?.managerUserList}
            />
          </div>
          <div className={"flex flex-wrap justify-center"}>
            {projectData.problemLists.map((list) => (
              <OrganisationList
                key={`list${list.listName}`}
                listName={list.listName}
                userList={list.userList}
              />
            ))}
          </div>
          <div className={"flex justify-center"}>
            <OrganisationList
              listName={"Others"}
              userList={projectData.otherUserList}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OrganisationProjectView;
