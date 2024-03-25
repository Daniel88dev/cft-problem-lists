import { useContext } from "react";
import { VehicleIssuesContext } from "./VehicleIssuesStore.tsx";

function useVehicleIssuesContext() {
  const vehicleIssuesCtx = useContext(VehicleIssuesContext);

  if (vehicleIssuesCtx === null) {
    throw new Error("vehicleIssuesContext is null");
  }
  return vehicleIssuesCtx;
}

export default useVehicleIssuesContext;
