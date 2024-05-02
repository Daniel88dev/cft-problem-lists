import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { OrganisationChartMain } from "../AdminTypes.ts";
import { ORGANISATION_USER_DEFAULT } from "../../../Assets/ADMIN_EXAMPLE_DATA.ts";

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
    <div>
      <h1>test</h1>
    </div>
  );
};

export default OrganisationProjectView;
