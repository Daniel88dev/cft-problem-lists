import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FiX} from "react-icons/fi";
import {createPortal} from "react-dom";

const NOTIFICATION_TTL = 6000;

export interface ChildMethods {
    setNotify: (newValue: string, newType: "basic" | "error") => void;
}

type NotifyType = {
    state: boolean;
    text: string;
    type: "basic" | "error";
}

/*
* To use Notification in component, it is needed first
* to make ref and use ChildMethods interface as type.
*
* import:
* import Notification, {type ChildMethods} from "../components/UI/Notification.tsx";
*
* in component:
* const notifyRef = useRef<ChildMethods>(null)
*
* in function you can call notification just with 3 lines:
* if (notifyRef.current) {
      notifyRef.current.setNotify(text, "basic");
    }
*
* where text is string you want to display,
* and second parameter can be "basic", or "error" to display correct notification type.
*
* use as JSX component as last component:
* <Notification ref={notifyRef}/>
*
* Notification is displayed out of basic root, where all components are rendered,
* so in index.html you need to also add:
* <div id="modal"></div>
*
* before <div id="root"></div>
*  */

const Notification = forwardRef<ChildMethods>((props, ref) => {
    //const notifyRef = useRef<string>(null);
    const [notification, setNotification] = useState<NotifyType>({
        state: false,
        text: "",
        type: "basic"
    })

    const removeNotif = () => {
        setNotification((prevState) => {
            return ({
                ...prevState,
                state: false,
            })
        })
    };

    useEffect(() => {
        if (notification.state) {
            const timeout = setTimeout(() => {
                removeNotif()
            }, NOTIFICATION_TTL);

            return () => clearTimeout(timeout)
        }
    }, [notification.state]);

    useImperativeHandle(ref, () => ({
        setNotify: (newValue: string, newType: "basic" | "error") => {
                setNotification({
                    state: true,
                    type: newType,
                    text: newValue
                });
            }
    }));



    const content = (
        <AnimatePresence>
            {notification.state && <motion.div
                layout
                initial={{y: 15, scale: 0.9, opacity: 0}}
                animate={{y: 0, scale: 1, opacity: 1}}
                exit={{y: -25, scale: 0.9, opacity: 0}}
                transition={{type: "spring"}}
                className={`p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white fixed z-50 bottom-4 right-4 ${notification.type === "error" ? 'bg-red-600' : 'bg-violet-500'}`}

            >
                <span>{notification.text}</span>
                <button onClick={removeNotif} className="ml-auto mt-0.5" {...props}>
                    <FiX/>
                </button>
            </motion.div>}
        </AnimatePresence>
    )

    const domElement = document.getElementById("modal");

    return domElement ? createPortal(content, domElement) : null;

})

export default Notification;