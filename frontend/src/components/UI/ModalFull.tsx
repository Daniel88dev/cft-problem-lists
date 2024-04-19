import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import CloseButton from "./Buttons/CloseButton.tsx";

function isMobileDevice(): boolean {
  return (
    typeof window !== "undefined" && window.navigator.userAgent.includes("Mobi")
  );
}

type ModalFullType = {
  onClose: () => void;
  children?: ReactNode;
  title?: string;
  type?: "small" | "medium" | "full";
};

const ModalOverlay = ({ onClose, children, title, type }: ModalFullType) => {
  const isMobile = isMobileDevice();
  let format =
    "relative bg-violet-200 dark:bg-gray-700 text-black dark:text-white p-4 border-2 rounded-2xl border-black dark:border-white z-30 overflow-hidden";

  if (type === "small") {
    format += " w-96 h-40";
  } else if (isMobile && (type === "full" || type === "medium")) {
    format += " w-full h-full";
  } else if (type === "medium") {
    format += " w-[48rem] h-[40rem]";
  } else if (type === "full") {
    format += " w-full h-full";
  }

  return (
    <motion.div
      className={format}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl">{title ? title : "Popup window"}</h2>
        <CloseButton onClick={onClose} />
      </div>
      <div className="overflow-y-auto w-full h-[95%]">
        <div className="flex overflow-visible">{children}</div>
      </div>
    </motion.div>
  );
};

const Backdrop = ({ onClose, children }: ModalFullType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex justify-center items-center left-0 top-0 w-full h-full z-20 backdrop-blur-sm"
      onClick={onClose}
    >
      {children}
    </motion.div>
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
      {createPortal(
        <Backdrop onClose={onClose}>
          <ModalOverlay onClose={onClose} title={title} type={type}>
            {children}
          </ModalOverlay>
        </Backdrop>,
        portalElement
      )}
    </>
  ) : null;
};

export default ModalFull;
