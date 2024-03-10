import { useEffect, useState, JSX } from "react";

import Select, { ActionMeta } from "react-select";

export interface OptionType {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: OptionType[];
  onSelect: (option: OptionType | null) => void;
  label: string;
  defaultValue?: OptionType;
  clearable?: boolean;
}

const SelectSearch = ({
  options,
  onSelect,
  label,
  defaultValue,
  clearable = true,
}: SelectProps): JSX.Element => {
  const [optionData, setOptionData] = useState<OptionType[]>([]);

  useEffect(() => {
    const array: OptionType[] = [];
    if (options.length > 0) {
      for (const option of options) {
        array.push({
          label: option.label,
          value: option.value,
        });
      }
      setOptionData(array);
    } else {
      setOptionData([]);
    }
  }, [options]);

  const handleChange = (
    selectedOption: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (actionMeta.action === "select-option" || actionMeta.action === "clear")
      onSelect(selectedOption);
  };

  return (
    <div className="mx-2 my-2">
      <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Select
        options={optionData}
        onChange={handleChange}
        className="w-56 h-10 rounded-lg text-black"
        isClearable={clearable}
        defaultValue={defaultValue ? defaultValue : null}
      />
    </div>
  );
};

export default SelectSearch;
