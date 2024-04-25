import { ChangeEvent } from "react";

type InputRadioInlineType = {
  groupName: string;
  options: string[];
  label: string;
  id: string;
  onSelect: (selected: string) => void;
  defaultValue?: string | null;
};

const InputRadioInline = ({
  groupName,
  options,
  label,
  id,
  onSelect,
  defaultValue = null,
}: InputRadioInlineType) => {
  const onOptionSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    onSelect(selected);
  };

  return (
    <div className={"mx-2 my-2 flex-col"}>
      <label
        className={
          "block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <div className={"flex pt-2"}>
        {options.map((option) => (
          <div key={`${id}${option}`}>
            <input
              className={"mx-2 my-2"}
              type={"radio"}
              id={option}
              name={groupName}
              value={option}
              defaultChecked={!!(defaultValue && defaultValue === option)}
              onChange={onOptionSelect}
            />
            <label htmlFor={option} className={"mx-2 my-2"}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputRadioInline;
