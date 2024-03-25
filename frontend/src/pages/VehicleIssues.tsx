import VehicleListStore from "../components/VehicleLists/Store/VehicleListsStore.tsx";
import VehicleIssuesHeader from "../components/VehicleIssues/VehicleIssuesHeader.tsx";

const VehicleIssues = () => {
  return (
    <VehicleListStore>
      <VehicleIssuesHeader />
    </VehicleListStore>
  );
};

export default VehicleIssues;
