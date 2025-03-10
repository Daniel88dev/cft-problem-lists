import { useState } from "react";
import ModalFull from "../ModalFull.tsx";

type TablePictureType = {
  src: string;
  alt: string;
};

const TablePicture = ({ src, alt }: TablePictureType) => {
  const [openModal, setOpenModal] = useState(false);

  const pictureContent = (
    <img
      className="relative max-w-3xl overflow-hidden bg-cover bg-no-repeat"
      src={src}
      alt={alt}
    />
  );

  return (
    <>
      <td className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
          src={src}
          alt={alt}
        />
        <div
          className="absolute cursor-pointer bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
          onClick={() => setOpenModal(true)}
        ></div>
      </td>
      {openModal && (
        <ModalFull
          onClose={() => setOpenModal(false)}
          type="medium"
          title={"Picture"}
        >
          {pictureContent}
        </ModalFull>
      )}
    </>
  );
};

export default TablePicture;
