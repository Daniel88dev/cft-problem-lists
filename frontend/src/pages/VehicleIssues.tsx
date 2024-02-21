import FilterMenu from "../components/UI/FilterMenu.tsx";
import InputText from "../components/UI/InputText.tsx";
import FilledButton from "../components/UI/FilledButton.tsx";
import SelectSearch, {
  type OptionType,
} from "../components/UI/SelectSearch.tsx";
import MultiSelect, { MultiOptionType } from "../components/UI/MultiSelect.tsx";

const SAMPLE_OPTIONS: OptionType[] = [
  {
    label: "Tested value",
    value: "Tested value",
  },
  {
    label: "Another one",
    value: "Another one",
  },
  {
    label: "More values for test",
    value: "More values for test",
  },
  {
    label: "This one looks better",
    value: "This one looks better",
  },
  {
    label: "Try to search this one",
    value: "Try to search this one",
  },
];

const handleSelect = (value: OptionType | null) => {
  console.log(value);
};

const handleMultiSelect = (value: readonly MultiOptionType[] | null) => {
  console.log(value);
};

const VehicleIssues = () => {
  return (
    <>
      <FilterMenu pageName="Vehicle Issues">
        <InputText id="test" label="Input field" />
        <FilledButton>Test</FilledButton>
        <SelectSearch
          label="Select option:"
          options={SAMPLE_OPTIONS}
          onSelect={handleSelect}
        />
        <MultiSelect
          options={SAMPLE_OPTIONS}
          onSelect={handleMultiSelect}
          label="Multi Select:"
        />
      </FilterMenu>
    </>
  );
};

export default VehicleIssues;
