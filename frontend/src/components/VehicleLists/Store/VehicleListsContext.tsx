import { useContext } from "react";
import { VehicleListContext } from "./VehicleListsStore.tsx";

function useVehicleListsContext() {
  const vehicleListsCtx = useContext(VehicleListContext);

  if (vehicleListsCtx === null) {
    throw new Error("vehicleListsContext is null");
  }
  return vehicleListsCtx;
}

export default useVehicleListsContext;
