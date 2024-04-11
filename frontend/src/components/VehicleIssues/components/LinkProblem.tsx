import ModalFull from "../../UI/ModalFull.tsx";
import { ConnectedProblemType } from "./ProblemCell.tsx";
import useVehicleIssuesContext from "../Store/VehicleIssuesContext.tsx";
import SelectSearch, { OptionType } from "../../UI/Select/SelectSearch.tsx";
import { useState } from "react";
import FilledButton from "../../UI/Buttons/FilledButton.tsx";
import { VehicleProblemType } from "../Store/VehicleIssuesTypes.tsx";

type LinkProblem = {
  onClose: () => void;
  data: ConnectedProblemType | null;
  onLinkSubmit: (value: VehicleProblemType) => void;
};

type SelectedDataType = {
  selectedList: OptionType | null;
  problemArray: OptionType[];
  selectedProblem: OptionType | null;
};

const LinkProblem = ({ onClose, data, onLinkSubmit }: LinkProblem) => {
  const { activeProject, selectedProjectProblems } = useVehicleIssuesContext();
  const [linkedProblem, setLinkedProblem] = useState<ConnectedProblemType>({
    list: data ? data.list : "",
    id: data ? data.id : 0,
    item: data ? data.item : 0,
    problemName: data ? data.problemName : "",
  });
  const [selectedData, setSelectedData] = useState<SelectedDataType>(() => {
    if (data) {
      const findProblemList = selectedProjectProblems.find((list) => {
        return list.listName === data.list;
      });
      const problems: OptionType[] = findProblemList!.problems.map(
        (problem) => {
          return {
            label: `${problem.item} - ${problem.problemName}`,
            value: problem.id,
          };
        }
      );
      return {
        selectedList: { label: data.list, value: data.list },
        problemArray: problems,
        selectedProblem: {
          label: `${data.item} - ${data.problemName}`,
          value: data.id,
        },
      };
    } else {
      return {
        selectedList: null,
        problemArray: [],
        selectedProblem: null,
      };
    }
  });

  const listArray: OptionType[] = activeProject!.lists.map((list) => {
    return {
      label: list,
      value: list,
    };
  });

  const onListSelect = (value: OptionType | null) => {
    if (value) {
      const findProblemList = selectedProjectProblems.find((list) => {
        return list.listName === value.value;
      });

      const problems: OptionType[] = findProblemList!.problems.map(
        (problem) => {
          return {
            label: `${problem.item} - ${problem.problemName}`,
            value: problem.id,
          };
        }
      );

      setSelectedData({
        selectedList: value,
        problemArray: problems,
        selectedProblem: null,
      });

      setLinkedProblem((prevState) => {
        return {
          ...prevState,
          list: value.label,
        };
      });
    } else {
      setSelectedData({
        selectedList: null,
        problemArray: [],
        selectedProblem: null,
      });
      setLinkedProblem({
        list: "",
        id: 0,
        item: 0,
        problemName: "",
      });
    }
  };

  const onProblemSelect = (value: OptionType | null) => {
    if (value) {
      const findProblemList = selectedProjectProblems.find((problemList) => {
        return problemList.listName === selectedData.selectedList!.value;
      });
      const findProblem = findProblemList!.problems.find((problem) => {
        return problem.id === value.value;
      });
      setLinkedProblem((prevState) => {
        return {
          ...prevState,
          id: Number(value.value),
          item: findProblem!.item,
          problemName: findProblem!.problemName,
        };
      });
    } else {
      setLinkedProblem((prevState) => {
        return {
          ...prevState,
          id: 0,
          item: 0,
          problemName: "",
        };
      });
    }
    setSelectedData((prevState) => {
      return {
        ...prevState,
        selectedProblem: value,
      };
    });
  };

  const onSubmit = () => {
    onLinkSubmit(linkedProblem);
  };

  const content = (
    <div className={"overflow-visible"}>
      <SelectSearch
        options={listArray}
        onSelect={onListSelect}
        label={"Select Problem List:"}
        defaultValue={
          selectedData.selectedList ? selectedData.selectedList : undefined
        }
      />
      <SelectSearch
        key={selectedData.selectedList?.label}
        options={selectedData.problemArray}
        onSelect={onProblemSelect}
        label={"Select Problem:"}
        defaultValue={
          selectedData.selectedProblem
            ? selectedData.selectedProblem
            : undefined
        }
      />
      <div className={"flex"}>
        <FilledButton onClick={onClose}>Cancel</FilledButton>
        <FilledButton onClick={onSubmit}>Submit</FilledButton>
      </div>
    </div>
  );

  return (
    <ModalFull onClose={onClose} type={"medium"} title={"Link to Problem"}>
      {content}
    </ModalFull>
  );
};

export default LinkProblem;
