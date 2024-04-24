import InputText from "../../UI/Input/InputText.tsx";
import { ColorType } from "./AdminTypes.ts";
import InputColor from "../../UI/Input/InputColor.tsx";
import { ChangeEvent } from "react";

type ColorSelection = {
  data: ColorType;
  id: string;
};

const ColorSelection = ({ data, id }: ColorSelection) => {
  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    console.log(color);
  };

  return (
    <div className={"flex"}>
      <InputText
        id={"input " + id}
        label={"Input color name:"}
        defaultValue={data.name}
      />
      <InputColor
        id={"color " + id}
        label={"Select color:"}
        defaultValue={data.color}
        onChange={onColorChange}
      />
    </div>
  );
};

export default ColorSelection;
