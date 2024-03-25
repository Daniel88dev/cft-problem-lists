import useVehicleListsContext from "./Store/VehicleListsContext.tsx";
import { VehicleDataType } from "./Store/VehicleListstypes.tsx";
import Loader from "../UI/Loader.tsx";
import TableMain from "../UI/Tables/TableMain.tsx";
import TableHeading from "../UI/Tables/TableHeading.tsx";
import Th from "../UI/Tables/Th.tsx";
import TableRow from "../UI/Tables/TableRow.tsx";
import { format } from "date-fns";
import ColorCell from "./components/ColorCell.tsx";

const VehicleListsTable = () => {
  const { data, filters, isLoading, isDataLoaded } = useVehicleListsContext();

  let filtered: VehicleDataType[] = [];

  if (!filters.filtersApplied) {
    filtered = data;
  } else {
    if (filters.status.length !== 0 && filters.color.length !== 0) {
      filtered = data.filter((dat) => {
        return (
          filters.status.includes(dat.vehicleStatus) &&
          filters.color.includes(dat.extColor.name)
        );
      });
    } else if (filters.status.length !== 0) {
      filtered = data.filter((dat) => {
        return filters.status.includes(dat.vehicleStatus);
      });
    } else if (filters.color.length !== 0) {
      filtered = data.filter((dat) => {
        return filters.color.includes(dat.extColor.name);
      });
    }
  }

  console.log(data);

  return (
    <>
      {isLoading && <Loader />}
      {isDataLoaded && !isLoading && (
        <TableMain>
          <TableHeading>
            <Th width={"w-24"}>Car identification</Th>
            <Th width={"w-48"}>Body No.</Th>
            <Th width={"w-48"}>Color</Th>
            <Th width={"w-48"}>Vehicle input</Th>
            <Th width={"w-48"}>Target S/Off</Th>
            <Th width={"w-48"}>Vehicle status</Th>
          </TableHeading>
          <tbody>
            {filtered.map((item) => (
              <TableRow key={item.id}>
                <td className={"px-2"}>{item.carIdentification}</td>
                <td className={"px-2"}>{item.bodyNo}</td>
                <ColorCell color={item.extColor} className={"px-2"} />
                <td className={"px-2"}>
                  {item.vehicleInput ? format(item.vehicleInput, "PPP") : ""}
                </td>
                <td className={"px-2"}>
                  {item.targetSOff ? format(item.targetSOff, "PPP") : ""}
                </td>
                <td className={"px-2"}>{item.vehicleStatus}</td>
              </TableRow>
            ))}
          </tbody>
        </TableMain>
      )}
    </>
  );
};

export default VehicleListsTable;
