import ChatWindow from "./components/ChatWindow.tsx";
import ChatNewMessage from "./components/ChatNewMessage.tsx";

const ProblemSearchChat = () => {
  return (
    <div
      className={
        "py-4 my-2 border-black dark:border-white border-2 rounded-2xl h-auto overflow-visible"
      }
    >
      <h1 className={"text-left text-2xl px-4"}>Message history:</h1>
      <ChatWindow />
      <ChatWindow />
      <ChatWindow />
      <ChatNewMessage />
    </div>
  );
};

export default ProblemSearchChat;
