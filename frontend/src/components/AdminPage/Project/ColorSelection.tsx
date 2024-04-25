import InputText from "../../UI/Input/InputText.tsx";
import { ColorType } from "./AdminTypes.ts";
import InputColor from "../../UI/Input/InputColor.tsx";
import { ChangeEvent, useState } from "react";
import InputRadioInline from "../../UI/Input/InputRadioInline.tsx";
import AdminProjectColorPreview from "./AdminProjectColorPreview.tsx";

type ColorSelection = {
  data: ColorType;
  id: string;
};

const ColorSelection = ({ data, id }: ColorSelection) => {
  const [colorData, setColorData] = useState({
    color: data.color,
    text: data.text,
    name: data.name,
    id: id,
  });
  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColorData((prevState) => {
      return {
        ...prevState,
        color: color,
      };
    });
  };

  const onSelectText = (value: string) => {
    console.log(value);
    if (value === "black" || value === "white") {
      setColorData((prevState) => {
        return {
          ...prevState,
          text: value,
        };
      });
    }
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setColorData((prevState) => {
      return {
        ...prevState,
        name: name,
      };
    });
  };

  return (
    <div className={"flex"}>
      <InputText
        id={"input " + id}
        label={"Input color name:"}
        defaultValue={colorData.name}
        onChange={onNameChange}
      />
      <InputColor
        id={"color " + id}
        label={"Select color:"}
        defaultValue={colorData.color}
        onChange={onColorChange}
      />
      <InputRadioInline
        id={`text${id}`}
        groupName={`textColor${id}`}
        options={["white", "black"]}
        label={"Select text color:"}
        onSelect={onSelectText}
        defaultValue={colorData.text}
      />
      <AdminProjectColorPreview data={colorData} />
    </div>
  );
};

export default ColorSelection;
