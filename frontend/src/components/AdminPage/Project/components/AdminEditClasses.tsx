import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ActionFormatTypes, ProjectActionTypes } from "../AdminTypes.ts";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";
import { ACTION_FORMAT_DEFAULT } from "../../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import { OptionType } from "../../../UI/Select/SelectSearch.tsx";
import ResponsibilitySelect from "./ResponsibilitySelect.tsx";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
  const [isOpen, setIsOpen] = useState(false);

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

  const onHeaderClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const content = (
    <>
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

  return (
    <motion.div className={"flex-col"}>
      <h3
        className={"text-left text-xl px-2 underline flex"}
        onClick={onHeaderClick}
      >
        Edit Responsibilities Actions
        {isOpen ? (
          <SlArrowUp className={"mt-1 ml-2"} />
        ) : (
          <SlArrowDown className={"mt-1 ml-2"} />
        )}
      </h3>
      {isOpen && content}
    </motion.div>
  );
};

export default AdminEditClasses;
