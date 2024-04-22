import { useParams } from "react-router-dom";
import VehicleSearchHeader from "../components/VehicleSearch/VehicleSearchHeader.tsx";
import { useEffect, useState } from "react";
import {
  VehicleIssuesType,
  VehicleProblemType,
} from "../components/VehicleIssues/Store/VehicleIssuesTypes.tsx";
import { EXAMPLE_VEHICLE_ISSUES_DATA } from "../Assets/VEHICLE_ISSUES_DATA.ts";
import VehicleSearchTable from "../components/VehicleSearch/VehicleSearchTable.tsx";
import VehicleSearchDetail from "../components/VehicleSearch/VehicleSearchDetail.tsx";
import { VehicleDataType } from "../components/VehicleLists/Store/VehicleListstypes.tsx";
import { EXAMPLE_VEHICLE_DATA } from "../Assets/VEHICLE_LIST_DATA.ts";

type LoadedIssuesType = VehicleIssuesType[] | null;

type VehicleDetailType = VehicleDataType | null;

// export type VehicleProblemConnection = {
//   id: number;
//   carIdentification: string;
//   bodyNo: string;
//   vehicleStage: string;
// };

const VehicleSearch = () => {
  const { vehicleId } = useParams();
  const [loadedIssues, setLoadedIssues] = useState<LoadedIssuesType>(null);
  const [vehicleDetail, setVehicleDetail] = useState<VehicleDetailType>(null);

  useEffect(() => {
    if (Number(vehicleId) !== 0) {
      //todo load from backend
      const findIssues = EXAMPLE_VEHICLE_ISSUES_DATA;
      const findVehicle = EXAMPLE_VEHICLE_DATA.find((vehicle) => {
        return vehicle.id === Number(vehicleId);
      });
      console.log(findIssues);
      setLoadedIssues(findIssues!);
      setVehicleDetail(findVehicle!);
    }
  }, [vehicleId]);

  const onLinkProblem = (value: VehicleProblemType | null, issueId: number) => {
    const newArray = loadedIssues!.map((issue) => {
      if (issue.id === issueId) {
        return {
          ...issue,
          connectedProblem: value,
        };
      } else {
        return issue;
      }
    });
    setLoadedIssues(newArray);
  };

  return (
    <>
      <VehicleSearchHeader vehicleId={Number(vehicleId)} />
      {vehicleDetail && <VehicleSearchDetail data={vehicleDetail} />}
      {loadedIssues && (
        <VehicleSearchTable data={loadedIssues} onLinkProblem={onLinkProblem} />
      )}
    </>
  );
};

export default VehicleSearch;
