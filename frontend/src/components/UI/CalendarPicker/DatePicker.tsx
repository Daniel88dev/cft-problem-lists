import { Popover, PopoverContent, PopoverTrigger } from "./Popover.tsx";
import { ButtonShadnCn } from "../Buttons/ButtonShadnCn.tsx";
import { cn } from "../../utility/cn.ts";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Calendar from "./Calendar.tsx";

export type DatePickerType = {
  id: string;
  label: string;
  date: Date | undefined;
  disabled: boolean;
  onDateChange: (selectedDate: Date) => void;
};

const DatePicker = ({
  id,
  label,
  date,
  onDateChange,
  disabled,
  ...props
}: DatePickerType) => {
  const onChangeDate = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      onDateChange(selectedDate);
    }
  };

  console.log(date);

  return (
    <div className={"mx-2 my-2"}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <ButtonShadnCn
            variant={"outline"}
            disabled={disabled}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className={"mr-2 h-4 w-4"} />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </ButtonShadnCn>
        </PopoverTrigger>
        <PopoverContent className={"w-auto p-0"}>
          <Calendar
            mode={"single"}
            selected={date}
            onSelect={onChangeDate}
            initialFocus
            {...props}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
