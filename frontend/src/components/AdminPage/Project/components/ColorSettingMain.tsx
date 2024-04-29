import { useState, MouseEvent } from "react";
import { ColorType } from "../AdminTypes.ts";
import ColorSelection from "./ColorSelection.tsx";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";

type ColorSettingMainType = {
  data: ColorType[];
  onColorUpdate: (value: ColorType) => void;
  onColorRemove: (colorId: number) => void;
  onAddNewColor: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ColorSettingMain = ({
  data,
  onColorUpdate,
  onColorRemove,
  onAddNewColor,
}: ColorSettingMainType) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHeaderClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const content = (
    <>
      {data.map((color) => (
        <ColorSelection
          key={`color${color.id}`}
          data={color}
          onColorUpdate={onColorUpdate}
          onColorRemove={onColorRemove}
        />
      ))}
      <FilledButton className={"w-32"} onClick={onAddNewColor}>
        Add Color
      </FilledButton>
    </>
  );

  return (
    <div>
      <h3
        className={"text-left text-xl px-2 underline flex"}
        onClick={onHeaderClick}
      >
        Edit Vehicle Colors
        {isOpen ? (
          <SlArrowUp className={"mt-1 ml-2"} />
        ) : (
          <SlArrowDown className={"mt-1 ml-2"} />
        )}
      </h3>
      {isOpen && content}
    </div>
  );
};

export default ColorSettingMain;
