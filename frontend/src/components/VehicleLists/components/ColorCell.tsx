import { ExtColorsType } from "../Store/VehicleListstypes.tsx";

type ColorCellType = {
  color: ExtColorsType;
  className: string;
};

const ColorCell = ({ color, className }: ColorCellType) => {
  const style = {
    background: color.color,
    color: color.text,
  };

  return (
    <td className={className} style={style}>
      {color.name}
    </td>
  );
};

export default ColorCell;
