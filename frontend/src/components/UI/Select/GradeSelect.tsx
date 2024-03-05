type GradeSelectType = {
  defaultValue: "A" | "B" | "C" | "D" | "S" | "";
  onSelect: (e: "A" | "B" | "C" | "D" | "S" | "") => void;
  label: string;
  id: string;
};

const GradeSelect = ({
  defaultValue,
  onSelect,
  label,
  id,
}: GradeSelectType) => {
  return (
    <div className={"mx-2 my-2"}>
      <label
        htmlFor={id}
        className={
          "block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <select
        id={id}
        defaultValue={defaultValue}
        onChange={(event) =>
          onSelect(event.target.value as "A" | "B" | "C" | "D" | "S" | "")
        }
        className={
          "bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
      >
        <option>S</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option></option>
      </select>
    </div>
  );
};

export default GradeSelect;
