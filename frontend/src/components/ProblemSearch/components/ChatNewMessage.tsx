import InputTextArea from "../../UI/Input/InputTextArea.tsx";
import FilledButton from "../../UI/Buttons/FilledButton.tsx";

const ChatNewMessage = () => {
  return (
    <div className={"mx-4"}>
      <InputTextArea id={"newMessage"} label={"Input your message:"} />
      <div className={"flex content-end"}>
        <FilledButton>Send</FilledButton>
        <FilledButton>Attach Report</FilledButton>
        <p className={"items-center mt-4"}>
          Possibility to attach report, or attachment.
        </p>
      </div>
    </div>
  );
};

export default ChatNewMessage;
