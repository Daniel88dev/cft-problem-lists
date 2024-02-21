import { useEffect, useState, JSX } from "react";

import Select, { ActionMeta, MultiValue } from "react-select";

export interface MultiOptionType {
  label: string;
  value: string;
}

interface SelectProps {
  options: MultiOptionType[];
  onSelect: (option: readonly MultiOptionType[] | null) => void;
  label: string;
}

const MultiSelect = ({
  options,
  onSelect,
  label,
}: SelectProps): JSX.Element => {
  const [optionData, setOptionData] = useState<MultiOptionType[]>([]);

  useEffect(() => {
    const array: MultiOptionType[] = [];
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
    selectedOption: MultiValue<MultiOptionType>,
    actionMeta: ActionMeta<MultiOptionType>
  ) => {
    console.log(actionMeta);
    if (
      actionMeta.action === "select-option" ||
      actionMeta.action === "clear" ||
      actionMeta.action === "remove-value"
    )
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
        className="w-96 h-10 rounded-lg text-black"
        isClearable={true}
        isMulti={true}
      />
    </div>
  );
};

export default MultiSelect;