import InputText from "../../../UI/Input/InputText.tsx";
import { ColorType } from "../../AdminTypes.ts";
import InputColor from "../../../UI/Input/InputColor.tsx";
import { ChangeEvent, MouseEvent, useState } from "react";
import InputRadioInline from "../../../UI/Input/InputRadioInline.tsx";
import AdminProjectColorPreview from "./AdminProjectColorPreview.tsx";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";

type ColorSelection = {
  data: ColorType;
  onColorUpdate: (value: ColorType) => void;
  onColorRemove: (colorId: number) => void;
};

const ColorSelection = ({
  data,
  onColorUpdate,
  onColorRemove,
}: ColorSelection) => {
  const [colorData, setColorData] = useState({
    color: data.color,
    text: data.text,
    name: data.name,
    id: data.id,
  });

  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColorData((prevState) => {
      return {
        ...prevState,
        color: color,
      };
    });
    if (colorData.name) {
      onColorUpdate({
        ...colorData,
        color: color,
      });
    }
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
      if (colorData.color && colorData.name) {
        onColorUpdate({
          ...colorData,
          text: value,
        });
      }
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
    if (colorData.color) {
      onColorUpdate({
        ...colorData,
        name: name,
      });
    }
  };

  const onDeleteColor = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onColorRemove(colorData.id);
  };

  return (
    <div className={"flex"}>
      <InputText
        id={"input " + colorData.id}
        label={"Input color name:"}
        defaultValue={colorData.name ? colorData.name : ""}
        onChange={onNameChange}
      />
      <InputColor
        id={"colorSelect" + colorData.id}
        label={"Select color:"}
        defaultValue={colorData.color ? colorData.color : "#ffffff"}
        onChange={onColorChange}
      />
      <InputRadioInline
        id={`text${colorData.id}`}
        groupName={`textColor${colorData.id}`}
        options={["white", "black"]}
        label={"Select text color:"}
        onSelect={onSelectText}
        defaultValue={colorData.text}
      />
      <AdminProjectColorPreview data={colorData} />
      <FilledButton onClick={onDeleteColor}>Delete color</FilledButton>
      <p className={"text-red-600 mt-12"}>
        {!colorData.name || !colorData.color
          ? "Select color or input text"
          : ""}
      </p>
    </div>
  );
};

export default ColorSelection;
