import { useRef, useState } from "react";
import Notification, { ChildMethods } from "../components/UI/Notification.tsx";
import FilledButton from "../components/UI/Buttons/FilledButton.tsx";
import CloseButton from "../components/UI/Buttons/CloseButton.tsx";
import InputText from "../components/UI/Input/InputText.tsx";
import ModalFull from "../components/UI/ModalFull.tsx";
import DatePicker from "../components/UI/CalendarPicker/DatePicker.tsx";

const UIComponents = () => {
  const notifyRef = useRef<ChildMethods>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

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
  };

  const modalContent = (
    <div className="flex flex-col justify-items-center align-middle">
      <h1>Test of Modal</h1>
      <FilledButton onClick={closeModal}>Close Modal</FilledButton>
    </div>
  );

  const testFunction = () => {
    if (notifyRef.current) {
      notifyRef.current.setNotify("test", "basic");
    }
  };

  const textInInput = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  const initial = "test";

  console.log(date);

  return (
    <>
      <h1>Problem Lists</h1>
      <div className="flex gap-2">
        <FilledButton onClick={() => callNotify("test of notify")}>
          Test notification
        </FilledButton>
        <FilledButton onClick={() => callNotifyError("test of error")}>
          Test notification error
        </FilledButton>
        <FilledButton onClick={openModal}>Test Modal</FilledButton>
        <CloseButton onClick={testFunction} />
      </div>
      <DatePicker
        id={"test"}
        label={"Select Date:"}
        date={date}
        disabled={false}
        onDateChange={setDate}
      />
      <div className="flex pt-4 pb-2">
        <InputText
          id="test"
          label="Enter text"
          ref={inputRef}
          placeholder={initial}
        />
      </div>
      <FilledButton onClick={textInInput}>Test Input</FilledButton>
      {displayModal && (
        <ModalFull onClose={closeModal} title={"Test of Modal"} type="medium">
          {modalContent}
        </ModalFull>
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default UIComponents;
