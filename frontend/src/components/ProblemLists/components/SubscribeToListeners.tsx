import { useRef, useState } from "react";
import useProblemListContext from "../Store/ProblemListContext.tsx";
import { AllUsersType } from "../Store/ProblemListTypes.tsx";
import Notification, { ChildMethods } from "../../UI/Notification.tsx";

const SubscribeToListeners = ({
  listeners,
  itemId,
}: {
  listeners: AllUsersType[];
  itemId: number;
}) => {
  const { format, setSubscribed, setUnsubscribed } = useProblemListContext();
  const [subscribedState, setSubscribedState] = useState(() => {
    const check = listeners.find((listener: AllUsersType) => {
      return listener.id === format.user.id;
    });
    return !!check;
  });
  const notifyRef = useRef<ChildMethods>(null);

  const handleChange = () => {
    //TODO Add backend fetch
    if (notifyRef.current) {
      notifyRef.current.setNotify(
        subscribedState ? "Un-Subscribed" : "Subscribed",
        "basic"
      );
    }
    if (subscribedState) {
      setUnsubscribed(itemId);
    } else {
      setSubscribed(itemId);
    }
    setSubscribedState((prevState) => {
      return !prevState;
    });
  };

  return (
    <td
      className={
        subscribedState
          ? "px-2 hover:underline hover:cursor-pointer text-red-500"
          : "px-2 hover:underline hover:cursor-pointer text-green-500"
      }
      onClick={handleChange}
    >
      {subscribedState && "Un-subscribe"}
      {!subscribedState && "Subscribe"}
      <Notification ref={notifyRef} />
    </td>
  );
};

export default SubscribeToListeners;
