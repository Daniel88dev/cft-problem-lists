import FilterMenu from "../../UI/FilterMenu.tsx";
import { useCallback, useEffect, useState } from "react";
import SelectSearch, { OptionType } from "../../UI/Select/SelectSearch.tsx";
import { PROJECT_EXAMPLE_DATA } from "../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import FilledButton from "../../UI/Buttons/FilledButton.tsx";
import { useNavigate } from "react-router-dom";

type ProjectDataType = {
  projects: OptionType[];
  selectedProject: OptionType | null;
};

const AdminProjectSelection = () => {
  const [projectData, setProjectData] = useState<ProjectDataType>({
    projects: [],
    selectedProject: null,
  });
  const navigate = useNavigate();

  const loadInitialData = useCallback(() => {
    const projectArray = PROJECT_EXAMPLE_DATA.map((project) => {
      return {
        label: project.name,
        value: project.id,
      };
    });
    setProjectData({
      projects: projectArray,
      selectedProject: null,
    });
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const onProjectSelect = (value: OptionType | null) => {
    if (value !== null) {
      setProjectData((prevState) => {
        return {
          ...prevState,
          selectedProject: value,
        };
      });
    } else {
      setProjectData((prevState) => {
        return {
          ...prevState,
          selectedProject: null,
        };
      });
    }
  };

  const onSubmitProject = () => {
    if (projectData.selectedProject) {
      navigate(`/admin/projects/${projectData.selectedProject.value}`);
    } else {
      alert("No project selected!");
    }
  };

  return (
    <FilterMenu pageName={"Projects Edit"}>
      <SelectSearch
        options={projectData.projects!}
        onSelect={onProjectSelect}
        label={"Select Project:"}
        defaultValue={projectData.selectedProject!}
      />
      <FilledButton
        onClick={onSubmitProject}
        disabled={!projectData.selectedProject}
      >
        Load Data
      </FilledButton>
    </FilterMenu>
  );
};

export default AdminProjectSelection;
