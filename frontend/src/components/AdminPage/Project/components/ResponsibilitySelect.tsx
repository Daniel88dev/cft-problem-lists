import { ProjectActionTypes } from "../AdminTypes.ts";
import SelectSearch, { OptionType } from "../../../UI/Select/SelectSearch.tsx";

type ResponsibilitySelectType = {
  classes: OptionType[];
  actions: OptionType[];
  status: OptionType[];
  data: ProjectActionTypes;
};

const ResponsibilitySelect = ({
  classes,
  actions,
  status,
  data,
}: ResponsibilitySelectType) => {
  const onClassChange = (value: OptionType | null) => {
    if (value) {
      console.log(value);
    }
  };

  return (
    <div className={"flex"}>
      <SelectSearch
        options={classes}
        onSelect={onClassChange}
        label={"Select Class:"}
        clearable={false}
        defaultValue={{
          label: data.selectedClass.className,
          value: data.selectedClass.classId,
        }}
      />
      <SelectSearch
        options={actions}
        onSelect={onClassChange}
        label={"Select Action:"}
        clearable={false}
        defaultValue={{
          label: data.action.actionName,
          value: data.action.actionId,
        }}
      />
      <SelectSearch
        options={status}
        onSelect={onClassChange}
        label={"Select status:"}
        clearable={false}
        defaultValue={{
          label: data.status.statusName,
          value: data.status.statusId,
        }}
      />
    </div>
  );
};

export default ResponsibilitySelect;
