import VehicleIssuesHeader from "../components/VehicleIssues/VehicleIssuesHeader.tsx";
import VehicleIssuesStore from "../components/VehicleIssues/Store/VehicleIssuesStore.tsx";

const VehicleIssues = () => {
  return (
    <VehicleIssuesStore>
      <VehicleIssuesHeader />
    </VehicleIssuesStore>
  );
};

export default VehicleIssues;
