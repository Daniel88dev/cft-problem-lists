import { useParams } from "react-router-dom";
import VehicleSearchHeader from "../components/VehicleSearch/VehicleSearchHeader.tsx";

const VehicleSearch = () => {
  const { vehicleId } = useParams();
  return (
    <>
      <VehicleSearchHeader vehicleId={Number(vehicleId)} />
    </>
  );
};

export default VehicleSearch;
