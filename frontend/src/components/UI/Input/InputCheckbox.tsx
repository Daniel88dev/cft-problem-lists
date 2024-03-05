import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface InputCheckboxType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  defaultChecked: boolean;
}

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxType>(
  ({ id, label, defaultChecked, ...props }, ref) => {
    return (
      <div className={"mx-2 my-2 flex"}>
        <label htmlFor={id} className={"px-2 py-2"}>
          {label}
        </label>
        <input
          type={"checkbox"}
          id={id}
          ref={ref}
          defaultChecked={defaultChecked}
          className={"px-2 py-2"}
          {...props}
        />
      </div>
    );
  }
);

export default InputCheckbox;
