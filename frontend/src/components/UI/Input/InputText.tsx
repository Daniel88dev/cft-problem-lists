import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface InputType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  className?: string;
}

const InputText = forwardRef<HTMLInputElement, InputType>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className="mx-2 my-2">
        <label
          htmlFor={id}
          className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type="text"
          id={id}
          ref={ref}
          className={`bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
            className ? " " + className : className
          }`}
          {...props}
        />
      </div>
    );
  }
);

export default InputText;
