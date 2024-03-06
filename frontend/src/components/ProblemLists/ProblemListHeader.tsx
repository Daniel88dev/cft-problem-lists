import useProblemListContext from "./Store/ProblemListContext.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  EXAMPLE_ACTION_DATA,
  EXAMPLE_CLASS_DATA,
  EXAMPLE_PROBLEM_LIST_DATA,
  PROJECTS_DEFAULT,
  USER_DEFAULT,
  USERS_DEFAULT,
} from "../../Assets/PROBLEM_LIST_DATA.ts";
import FilterMenu from "../UI/FilterMenu.tsx";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import Notification, { type ChildMethods } from "../UI/Notification.tsx";

type SelectedType = {
  projectId: number;
  list: OptionType[];
};

const ProblemListHeader = () => {
  const { loadInitialData, format, loadProblems, setLoading } =
    useProblemListContext();
  const [selectedData, setSelectedData] = useState<SelectedType>({
    projectId: 0,
    list: [],
  });
  const notifyRef = useRef<ChildMethods>(null);

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    const loadedData = {
      user: USER_DEFAULT,
      allUsers: USERS_DEFAULT,
      projects: PROJECTS_DEFAULT,
      classes: EXAMPLE_CLASS_DATA,
      actions: EXAMPLE_ACTION_DATA,
    };
    loadInitialData(loadedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProblemList = () => {
    setLoading();
    //TODO load data from backend logic
    loadProblems(EXAMPLE_PROBLEM_LIST_DATA, selectedData.projectId);
    if (notifyRef.current) {
      notifyRef.current.setNotify("Data Load Successfully", "basic");
    }
  };

  const projectList = () => {
    const projects: OptionType[] = [];
    format.projects.map((project) => {
      projects.push({
        label: project.name,
        value: project.id,
      });
    });
    return projects;
  };

  const onProjectSelect = (value: OptionType | null) => {
    console.log(value);
    if (value !== null) {
      setSelectedData((prevState) => {
        const listArray: OptionType[] = [];
        const selectedProject = format.projects.find((project) => {
          return project.id === +value.value;
        });
        selectedProject!.lists.map((list) => {
          listArray.push({
            label: list,
            value: list,
          });
        });
        return {
          ...prevState,
          projectId: +value.value,
          list: listArray,
        };
      });
    }
  };

  const onListSelect = (value: OptionType | null) => {
    console.log(value);
    // Do something with the selected list
  };

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  return (
    <>
      <FilterMenu pageName="Problem Lists">
        <SelectSearch
          options={projectList()}
          onSelect={onProjectSelect}
          label="Select Project:"
        />
        <SelectSearch
          options={selectedData.list}
          onSelect={onListSelect}
          label="Select Problem list:"
        />
        <FilledButton onClick={loadProblemList}>Load Data</FilledButton>
      </FilterMenu>
      <Notification ref={notifyRef} />
    </>
  );
};

export default ProblemListHeader;
