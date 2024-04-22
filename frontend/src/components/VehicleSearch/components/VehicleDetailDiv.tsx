import { ReactNode } from "react";

type VehicleDetailDivType = {
  children: ReactNode;
};

const VehicleDetailDiv = ({ children }: VehicleDetailDivType) => {
  return <div className={"mx-2 p-2"}>{children}</div>;
};

export default VehicleDetailDiv;
