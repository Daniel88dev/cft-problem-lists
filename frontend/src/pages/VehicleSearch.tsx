import { useParams } from "react-router-dom";
import VehicleSearchHeader from "../components/VehicleSearch/VehicleSearchHeader.tsx";
import { useEffect, useState } from "react";
import {
  VehicleIssuesType,
  VehicleProblemType,
} from "../components/VehicleIssues/Store/VehicleIssuesTypes.tsx";
import { EXAMPLE_VEHICLE_ISSUES_DATA } from "../Assets/VEHICLE_ISSUES_DATA.ts";
import VehicleSearchTable from "../components/VehicleSearch/VehicleSearchTable.tsx";

type LoadedIssuesType = VehicleIssuesType[] | null;

export type VehicleProblemConnection = {
  id: number;
  carIdentification: string;
  bodyNo: string;
  vehicleStage: string;
};

const VehicleSearch = () => {
  const { vehicleId } = useParams();
  const [loadedIssues, setLoadedIssues] = useState<LoadedIssuesType>(null);

  useEffect(() => {
    if (Number(vehicleId) !== 0) {
      //todo load from backend
      const findIssues = EXAMPLE_VEHICLE_ISSUES_DATA;
      console.log(findIssues);
      setLoadedIssues(findIssues!);
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
      {loadedIssues && (
        <VehicleSearchTable data={loadedIssues} onLinkProblem={onLinkProblem} />
      )}
    </>
  );
};

export default VehicleSearch;
