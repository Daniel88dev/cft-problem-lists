import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputColor
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
}

const InputColor = ({ id, label, ...props }: InputColor) => {
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
      <input
        type={"color"}
        id={id}
        className={
          "bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:rind-blue-500 dark:focus:border-blue-500"
        }
        {...props}
      />
    </div>
  );
};

export default InputColor;
