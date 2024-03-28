import VehicleIssuesHeader from "../components/VehicleIssues/VehicleIssuesHeader.tsx";
import VehicleIssuesStore from "../components/VehicleIssues/Store/VehicleIssuesStore.tsx";
import VehicleIssuesTable from "../components/VehicleIssues/VehicleIssuesTable.tsx";

const VehicleIssues = () => {
  return (
    <VehicleIssuesStore>
      <VehicleIssuesHeader />
      <VehicleIssuesTable />
    </VehicleIssuesStore>
  );
};

export default VehicleIssues;
