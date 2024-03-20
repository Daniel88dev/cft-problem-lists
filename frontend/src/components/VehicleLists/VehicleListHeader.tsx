import useVehicleListsContext from "./Store/VehicleListsContext.tsx";

import { useCallback, useEffect } from "react";
import { PROJECT_DEFAULT } from "../../Assets/VEHICLE_LIST_DATA.ts";

const VehicleListHeader = () => {
  const { loadInitialData } = useVehicleListsContext();

  const loadInitial = useCallback(() => {
    //TODO apply loading from backend
    loadInitialData(PROJECT_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);
};

export default VehicleListHeader;
