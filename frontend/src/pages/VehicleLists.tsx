import VehicleListStore from "../components/VehicleLists/Store/VehicleListsStore.tsx";
import VehicleListHeader from "../components/VehicleLists/VehicleListHeader.tsx";
import VehicleListsTable from "../components/VehicleLists/VehicleListsTable.tsx";

const VehicleLists = () => {
  return (
    <VehicleListStore>
      <VehicleListHeader />
      <VehicleListsTable />
    </VehicleListStore>
  );
};

export default VehicleLists;
