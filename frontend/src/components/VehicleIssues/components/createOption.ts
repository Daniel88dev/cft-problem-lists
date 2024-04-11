import { OptionType } from "../../UI/Select/SelectSearch.tsx";

export const createOption = (stage: string): OptionType => {
  return {
    value: stage,
    label: stage,
  };
};
