import { ReactNode } from "react";
import { createPortal } from "react-dom";
import CloseButton from "./Buttons/CloseButton.tsx";

type ModalFullType = {
  onClose: () => void;
  children?: ReactNode;
  title?: string;
  type?: "small" | "medium" | "full";
};

const Backdrop = ({ onClose }: ModalFullType) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-full backdrop-blur-sm"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ onClose, children, title, type }: ModalFullType) => {
  let format =
    "fixed bg-violet-200 dark:bg-gray-700 text-black dark:text-white p-4 border-2 rounded-2xl border-black dark:border-white z-30";

  if (type === "small") {
    format +=
      " w-96 h-32 left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 items-center justify-center";
  } else if (type === "medium") {
    format +=
      " w-[48rem] h-[56rem] left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 items-center justify-center";
  } else if (type === "full") {
    format += " top-14 left-14 right-14 bottom-14";
  }

  return (
    <div className={format}>
      <div className="flex justify-between">
        <h2 className="text-2xl">{title ? title : "Popup window"}</h2>
        <CloseButton onClick={onClose} />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const ModalFull = ({
  onClose,
  children,
  title,
  type = "small",
}: ModalFullType) => {
  return portalElement ? (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay onClose={onClose} title={title} type={type}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  ) : null;
};

export default ModalFull;
