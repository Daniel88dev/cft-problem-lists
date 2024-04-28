import React from "react";
import { cn } from "../../utility/cn.ts";

const FilledButton = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className={cn(
        `
        relative flex items-center gap-2 overflow-hidden rounded-lg border-[1px] h-10 mb-2
        border-black dark:border-white px-4 py-2 font-semibold
        text-black dark:text-white hover:dark:text-white transition-all duration-500
        hover:dark:border-black
        my-2 mx-2
        min-w-20
        
        disabled:cursor-not-allowed
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-500 dark:before:bg-black
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`,
        className ? className : null
      )}
    >
      <span>{children}</span>
    </button>
  );
};

export default FilledButton;
