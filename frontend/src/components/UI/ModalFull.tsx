import { ReactNode } from "react";
import { createPortal } from "react-dom";
import CloseButton from "./CloseButton.tsx";

type ModalFullType = {
  onClose: () => void;
  children?: ReactNode;
  title?: string;
};

const Backdrop = ({ onClose }: ModalFullType) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-full backdrop-blur-sm"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ onClose, children, title }: ModalFullType) => {
  return (
    <div className="fixed top-14 left-14 right-14 bottom-14 bg-violet-200 dark:bg-gray-700 text-black dark:text-white p-4 border-2 z-30">
      <div className="flex justify-between">
        <h2 className="text-2xl">{title ? title : "Popup window"}</h2>
        <CloseButton onClick={onClose} />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const ModalFull = ({ onClose, children, title }: ModalFullType) => {
  return portalElement ? (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay onClose={onClose} title={title}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  ) : null;
};

export default ModalFull;
