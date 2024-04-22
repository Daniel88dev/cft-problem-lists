import { VehicleDataType } from "../VehicleLists/Store/VehicleListstypes.tsx";
import VehicleDetailDiv from "./components/VehicleDetailDiv.tsx";
import { format } from "date-fns";

type VehicleSearchDetailType = {
  data: VehicleDataType;
};

const VehicleSearchDetail = ({ data }: VehicleSearchDetailType) => {
  const colorStyle = {
    background: data.extColor.color,
    color: data.extColor.text,
  };
  return (
    <div
      className={
        "flex flex-wrap my-2 h-22 border-black dark:border-white border-2 rounded-2xl items-end h-auto overflow-visible flex-shrink-0 mx-4 md:mx-0"
      }
    >
      <VehicleDetailDiv>
        <h3>Car id:</h3>
        <p>{data.carIdentification}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Body no.:</h3>
        <p>{data.bodyNo}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Ext. color:</h3>
        <p style={colorStyle}>{data.extColor.name}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Stage:</h3>
        <p>{data.vehicleStage}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Status:</h3>
        <p>{data.vehicleStatus}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Input:</h3>
        <p>{data.vehicleInput ? format(data.vehicleInput, "PPP") : ""}</p>
      </VehicleDetailDiv>
      <VehicleDetailDiv>
        <h3>Sign-off target:</h3>
        <p>{data.targetSOff ? format(data.targetSOff, "PPP") : ""}</p>
      </VehicleDetailDiv>
    </div>
  );
};

export default VehicleSearchDetail;
