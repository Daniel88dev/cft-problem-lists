import FilterMenu from "../UI/FilterMenu.tsx";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import { useCallback, useEffect, useState } from "react";
import { ProjectTypes } from "../ProblemLists/Store/ProblemListTypes.tsx";
import {
  EXAMPLE_PROBLEM_LIST_DATA,
  PROJECTS_DEFAULT,
} from "../../Assets/PROBLEM_LIST_DATA.ts";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import { useNavigate } from "react-router-dom";

type ProblemSearchHeaderType = {
  problemId: number;
};

type selectedDataType = {
  projectList: OptionType[];
  selectedProject: OptionType | null;
  problemLists: string[];
  selectedList: OptionType | null;
  problemsArray: OptionType[];
  selectedProblem: OptionType | null;
};

const ProblemSearchHeader = ({ problemId }: ProblemSearchHeaderType) => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [selectedData, setSelectedData] = useState<selectedDataType>({
    projectList: [],
    selectedProject: null,
    problemLists: [],
    selectedList: null,
    problemsArray: [],
    selectedProblem: null,
  });
  const navigate = useNavigate();

  const loadInitial = useCallback(() => {
    //todo load data from backend
    setProjects(PROJECTS_DEFAULT);
    const projectArray: OptionType[] = PROJECTS_DEFAULT.map((project) => {
      return {
        label: project.name,
        value: project.id,
      };
    });
    if (problemId !== 0) {
      const findProblem = EXAMPLE_PROBLEM_LIST_DATA.find((problem) => {
        return problem.id === problemId;
      });
      const findProject = projectArray.find((project) => {
        return project.value === findProblem!.projectId;
      });
      const findProjectForlist = PROJECTS_DEFAULT.find((project) => {
        return project.id === findProblem!.projectId;
      });
      const problemArray = EXAMPLE_PROBLEM_LIST_DATA.map((problem) => {
        return {
          value: problem.id,
          label: `${problem.item} - ${problem.problemName}`,
        };
      });
      setSelectedData({
        projectList: projectArray,
        selectedProject: findProject!,
        problemLists: findProjectForlist!.lists,
        selectedList: { value: findProblem!.list, label: findProblem!.list },
        problemsArray: problemArray,
        selectedProblem: {
          value: findProblem!.id,
          label: `${findProblem!.item} - ${findProblem!.problemName}`,
        },
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          projectList: projectArray,
        };
      });
    }
  }, [problemId]);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const onProjectSelect = (value: OptionType | null) => {
    if (value) {
      const findProject = projects.find((singleProject) => {
        return singleProject.id === Number(value.value);
      });
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedProject: value,
          problemLists: findProject!.lists,
          selectedList: null,
          problemsArray: [],
          selectedProblem: null,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedProject: null,
          problemLists: [],
          selectedList: null,
          problemsArray: [],
          selectedProblem: null,
        };
      });
    }
  };

  const listArray = selectedData.problemLists.map((list) => {
    return {
      label: list,
      value: list,
    };
  });

  const onListSelect = (value: OptionType | null) => {
    if (value) {
      const arrayOfProblems = EXAMPLE_PROBLEM_LIST_DATA.map((problem) => {
        return {
          value: problem.id,
          label: `${problem.item} - ${problem.problemName}`,
        };
      });
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedList: value,
          problemsArray: arrayOfProblems,
          selectedProblem: null,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedList: null,
          problemsArray: [],
          selectedProblem: null,
        };
      });
    }
  };

  const onProblemSelect = (value: OptionType | null) => {
    if (value) {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedProblem: value,
        };
      });
    } else {
      setSelectedData((prevState) => {
        return {
          ...prevState,
          selectedProblem: null,
        };
      });
    }
  };

  const onSubmitSearch = () => {
    if (
      selectedData.selectedProblem &&
      selectedData.selectedProblem.value !== 0
    ) {
      navigate(`/problem-search/problem/${selectedData.selectedProblem.value}`);
    }
  };

  return (
    <>
      <FilterMenu pageName={"Problem Search"}>
        <SelectSearch
          key={selectedData.selectedProject?.label}
          options={selectedData.projectList}
          onSelect={onProjectSelect}
          label={"Select Project"}
          defaultValue={
            selectedData.selectedProject
              ? selectedData.selectedProject
              : undefined
          }
        />
        <SelectSearch
          key={selectedData.selectedProject?.value}
          options={listArray}
          onSelect={onListSelect}
          label={"Select Problem list:"}
          defaultValue={
            selectedData.selectedList ? selectedData.selectedList : undefined
          }
          disabled={selectedData.selectedProject === null}
        />
        <SelectSearch
          key={selectedData.selectedList?.value}
          options={selectedData.problemsArray}
          onSelect={onProblemSelect}
          label={"Select Problem:"}
          defaultValue={
            selectedData.selectedProblem
              ? selectedData.selectedProblem
              : undefined
          }
          disabled={selectedData.selectedList === null}
        />
        <FilledButton
          onClick={onSubmitSearch}
          disabled={!selectedData.selectedProblem}
        >
          Load Problem
        </FilledButton>
      </FilterMenu>
    </>
  );
};

export default ProblemSearchHeader;
