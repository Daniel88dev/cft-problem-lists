import { useCallback, useEffect, useState } from "react";
import { ActionFormatTypes, ProjectActionTypes } from "../AdminTypes.ts";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";
import { ACTION_FORMAT_DEFAULT } from "../../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import { OptionType } from "../../../UI/Select/SelectSearch.tsx";
import ResponsibilitySelect from "./ResponsibilitySelect.tsx";

type AdminEditClassesType = {
  data: ProjectActionTypes[];
};

const AdminEditClasses = ({ data }: AdminEditClassesType) => {
  const [settingArrays, setSettingArrays] = useState<ActionFormatTypes>({
    classes: [],
    actions: [],
    status: [],
  });
  const [responsibilities, setResponsibilities] =
    useState<ProjectActionTypes[]>(data);

  const loadInitial = useCallback(() => {
    //todo load from backend
    setSettingArrays(ACTION_FORMAT_DEFAULT);
  }, []);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  const classArray: OptionType[] = settingArrays.classes.map((record) => {
    return {
      label: record.className,
      value: record.classId,
    };
  });

  const actionArray: OptionType[] = settingArrays.actions.map((record) => {
    return {
      label: record.actionName,
      value: record.actionId,
    };
  });

  const statusArray: OptionType[] = settingArrays.status.map((record) => {
    return {
      label: record.statusName,
      value: record.statusId,
    };
  });

  const onResponsibilityChange = () => {
    setResponsibilities([]);
  };

  return (
    <>
      <h3 className={"text-left px-2 underline"}>
        Edit Responsibilities Actions
      </h3>
      <p className={"text-left p-2"}>
        <span>Warning: </span>Making responsibility changes, can influence data
        in Problem list.
      </p>
      <div className={"flex"}>
        <FilledButton>Edit Classes</FilledButton>
        <FilledButton>Edit Actions</FilledButton>
        <FilledButton>Edit Status</FilledButton>
      </div>
      {responsibilities.map((single) => (
        <ResponsibilitySelect
          key={`Responsibility${single.actionId}`}
          classes={classArray}
          actions={actionArray}
          status={statusArray}
          data={single}
        />
      ))}
      <FilledButton className={"w-28"} onClick={onResponsibilityChange}>
        Add row
      </FilledButton>
    </>
  );
};

export default AdminEditClasses;
