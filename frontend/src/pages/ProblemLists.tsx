import FilledButton from "../components/UI/FilledButton.tsx";
import {useRef, useState} from "react";
import Notification, {type ChildMethods} from "../components/UI/Notification.tsx";
import ModalFull from "../components/UI/ModalFull.tsx";
import CloseButton from "../components/UI/CloseButton.tsx";


const ProblemLists = () => {
  const notifyRef = useRef<ChildMethods>(null);
  const [displayModal, setDisplayModal] = useState(false);


  const openModal = () => {
      setDisplayModal(true);
  };

  const closeModal = () => {
      setDisplayModal(false);
  };


  const callNotify = (text: string) => {
    if (notifyRef.current) {
      notifyRef.current.setNotify(text, "basic");
    }
  };

  const callNotifyError = (text: string) => {
    if (notifyRef.current) {
      notifyRef.current.setNotify(text, "error");
    }
  }

const modalContent = (
    <div className="flex flex-col justify-items-center align-middle">
        <h1>Test of Modal</h1>
        <FilledButton onClick={closeModal}>Close Modal</FilledButton>
    </div>
)

    const testFunction = () => {
      if (notifyRef.current) {
          notifyRef.current.setNotify("test", "basic")
      }
    }


  return (
    <>
      <h1>Problem Lists</h1>
      <div className="flex gap-2">
        <FilledButton onClick={() => callNotify("test of notify")}>Test notification</FilledButton>
      <FilledButton onClick={() => callNotifyError("test of error")}>Test notification error</FilledButton>
          <FilledButton onClick={openModal}>Test Modal</FilledButton>
          <CloseButton onClick={testFunction} />
      </div>
        {displayModal && <ModalFull onClose={closeModal} title={"Test of Modal"}>{modalContent}</ModalFull>}
        <Notification ref={notifyRef}/>
    </>
  );
};

export default ProblemLists;
