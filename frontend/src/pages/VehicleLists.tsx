import VehicleListStore from "../components/VehicleLists/Store/VehicleListsStore.tsx";
import VehicleListHeader from "../components/VehicleLists/VehicleListHeader.tsx";

const VehicleLists = () => {
  return (
    <VehicleListStore>
      <VehicleListHeader />
    </VehicleListStore>
  );
};

export default VehicleLists;
