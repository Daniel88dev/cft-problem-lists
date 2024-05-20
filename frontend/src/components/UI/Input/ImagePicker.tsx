import FilledButton from "../Buttons/FilledButton.tsx";
import { EventHandler, useRef, useState } from "react";
import { Image } from "lucide-react";

type ImagePickerProps = {
  label: string;
  name: string;
};

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef<HTMLInputElement>(null);

  const handleClickPicker = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (
    event: EventHandler<HTMLInputElement, EventHandler>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
    } else {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <div>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt={"The image selected by the user."} />
          )}
        </div>
        <input
          type={"file"}
          id={name}
          accept={"image/png, image/jpeg"}
          name={name}
          className={"hidden"}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <FilledButton type={"button"} onClick={handleClickPicker}>
          Pick an Image
        </FilledButton>
      </div>
    </div>
  );
};

export default ImagePicker;
