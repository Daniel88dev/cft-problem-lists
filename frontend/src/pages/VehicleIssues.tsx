import FilterMenu from "../components/UI/FilterMenu.tsx";
import InputText from "../components/UI/InputText.tsx";
import FilledButton from "../components/UI/FilledButton.tsx";
import SelectSearch, {
  type OptionType,
} from "../components/UI/SelectSearch.tsx";
import MultiSelect, { MultiOptionType } from "../components/UI/MultiSelect.tsx";
import TableMain from "../components/VehicleIssues/TableMain.tsx";
import TableHeading from "./TableHeading.tsx";

import { EXAMPLE_DATA } from "../components/VehicleIssues/EXAMPLE_DATA.tsx";

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
      <TableMain>
        <TableHeading>
          <th className="w-24 overflow-auto whitespace-nowrap">Item</th>
          <th className="w-24 overflow-auto whitespace-nowrap">Stages</th>
          <th className="w-48 overflow-auto whitespace-nowrap">Picture</th>
          <th className="w-24 overflow-auto whitespace-nowrap">Problem Name</th>
          <th className="w-48 overflow-auto whitespace-nowrap">
            Problem Description
          </th>
          <th className="w-48 overflow-auto whitespace-nowrap">Actions done</th>
          <th className="w-48 overflow-auto whitespace-nowrap">
            Counter Measure
          </th>
          <th className="w-24 overflow-auto whitespace-nowrap">Grade</th>
          <th className="w-24 overflow-auto whitespace-nowrap">Class</th>
          <th className="w-24 overflow-auto whitespace-nowrap">Status</th>
          <th className="w-24 overflow-auto whitespace-nowrap">
            Responsibility
          </th>
        </TableHeading>
        <tbody>
          {EXAMPLE_DATA.map((item) => (
            <tr className="h-48" key={item.id}>
              <td>{item.item}</td>
              <td>{item.stages.LP1}</td>
              <td>{item.picture}</td>
              <td>{item.problemName}</td>
              <td>{item.problemDescription}</td>
              <td>{item.actionsDone}</td>
              <td>{item.counterMeasure}</td>
              <td>{item.grade}</td>
              <td>{item.class}</td>
              <td>{item.status}</td>
              <td>{item.responsibility}</td>
            </tr>
          ))}
        </tbody>
      </TableMain>
    </>
  );
};

export default VehicleIssues;
