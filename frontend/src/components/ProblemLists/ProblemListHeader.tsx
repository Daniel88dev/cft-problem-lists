import useProblemListContext from "./Store/ProblemListContext.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  EXAMPLE_ACTION_DATA,
  EXAMPLE_CLASS_DATA,
  EXAMPLE_PROBLEM_LIST_DATA,
  PROJECTS_DEFAULT,
  STATUS_EXAMPLES,
  USER_DEFAULT,
  USERS_DEFAULT,
} from "../../Assets/PROBLEM_LIST_DATA.ts";
import FilterMenu from "../UI/FilterMenu.tsx";
import SelectSearch, { OptionType } from "../UI/Select/SelectSearch.tsx";
import FilledButton from "../UI/Buttons/FilledButton.tsx";
import Notification, { type ChildMethods } from "../UI/Notification.tsx";
import MultiSelect, { MultiOptionType } from "../UI/Select/MultiSelect.tsx";
import NewProblemRegistration from "./components/NewProblemRegistration.tsx";
import { ProblemListDataType } from "./Store/ProblemListTypes.tsx";

type SelectedType = {
  projectId: number;
  list: OptionType[];
};

export type FiltersType = {
  project: OptionType | undefined;
  list: OptionType | undefined;
  status: readonly MultiOptionType[] | null | undefined;
  grade: readonly MultiOptionType[] | null | undefined;
};

const ProblemListHeader = () => {
  const {
    loadInitialData,
    format,
    loadProblems,
    setLoading,
    filters,
    isInitialLoaded,
    applyFilters,
    registerProblem,
  } = useProblemListContext();
  const [selectedData, setSelectedData] = useState<SelectedType>({
    projectId: 0,
    list: [],
  });
  const [filtersState, setFiltersState] = useState<FiltersType>({
    project: undefined,
    list: undefined,
    status: [],
    grade: [],
  });
  const [registerProblemState, setRegisterProblemState] = useState(false);
  const notifyRef = useRef<ChildMethods>(null);

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    const loadedData = {
      user: USER_DEFAULT,
      allUsers: USERS_DEFAULT,
      projects: PROJECTS_DEFAULT,
      classes: EXAMPLE_CLASS_DATA,
      actions: EXAMPLE_ACTION_DATA,
      status: STATUS_EXAMPLES,
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
      setFiltersState((prevState) => {
        return {
          ...prevState,
          project: value,
          list: undefined,
        };
      });
    } else {
      setFiltersState((prevState) => {
        return {
          ...prevState,
          project: undefined,
          list: undefined,
        };
      });
    }
  };

  const onListSelect = (value: OptionType | null) => {
    console.log(value);
    if (value !== null) {
      setFiltersState((prevState) => {
        return {
          ...prevState,
          list: value,
        };
      });
    } else {
      setFiltersState((prevState) => {
        return {
          ...prevState,
          list: undefined,
        };
      });
    }
    // TODO apply logic
    // Do something with the selected list
  };

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const statusArray: MultiOptionType[] = [];

  if (isInitialLoaded) {
    format.status.map((single) => {
      statusArray.push({
        label: single,
        value: single,
      });
    });
  }

  const gradeArray = [
    { label: "S", value: "S" },
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
  ];

  const onStatusSelect = (value: readonly MultiOptionType[] | null) => {
    if (value!.length === 0) {
      applyFilters([], filters.grade);
    } else {
      const array: string[] = value!.map((single) => {
        return single.label;
      });
      applyFilters(array, filters.grade);
      console.log(array, filters.grade);
    }
    setFiltersState((prevState) => {
      return {
        ...prevState,
        status: value,
      };
    });
  };

  const onGradeSelect = (value: readonly MultiOptionType[] | null) => {
    if (value!.length === 0) {
      applyFilters(filters.status, []);
    } else {
      const array: string[] = value!.map((single) => {
        return single.label;
      });
      applyFilters(filters.status, array);
    }
    setFiltersState((prevState) => {
      return {
        ...prevState,
        grade: value,
      };
    });
  };

  const onProblemRegistrationSubmit = (dataToRegister: ProblemListDataType) => {
    console.log(dataToRegister);
    registerProblem(dataToRegister);
    setRegisterProblemState(false);
    if (notifyRef.current) {
      notifyRef.current.setNotify("Problem registered", "basic");
    }
  };

  return (
    <>
      <FilterMenu pageName="Problem Lists">
        <SelectSearch
          options={projectList()}
          onSelect={onProjectSelect}
          label="Select Project:"
          defaultValue={filtersState.project}
        />
        <SelectSearch
          options={selectedData.list}
          onSelect={onListSelect}
          label="Select Problem list:"
          defaultValue={filtersState.list}
        />
        <FilledButton onClick={loadProblemList}>Load Data</FilledButton>
        <MultiSelect
          options={statusArray}
          onSelect={onStatusSelect}
          label={"Filter by status:"}
          defaultValue={filtersState.status}
        />
        <MultiSelect
          options={gradeArray}
          onSelect={onGradeSelect}
          label={"Filter by grade:"}
          width={"w-48"}
          defaultValue={filtersState.grade}
        />
        <FilledButton
          disabled={!loadInitial}
          onClick={() => setRegisterProblemState(true)}
        >
          Register New Problem
        </FilledButton>
      </FilterMenu>
      {registerProblemState && (
        <NewProblemRegistration
          onClose={() => setRegisterProblemState(false)}
          onSubmitData={(data) => onProblemRegistrationSubmit(data)}
          selectedProjectData={filtersState}
        />
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default ProblemListHeader;
