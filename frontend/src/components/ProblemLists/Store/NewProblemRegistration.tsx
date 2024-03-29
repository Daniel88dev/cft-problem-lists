// import ModalFull from "../../UI/ModalFull.tsx";
// import useProblemListContext from "./ProblemListContext.tsx";
// import { useRef, useState } from "react";
// import { UserType } from "./ProblemListTypes.tsx";
//
// const NewProblemRegistration = ({ onClose }) => {
//   const { activeProject, format } = useProblemListContext();
//   const problemName = useRef<HTMLInputElement>(null);
//   const problemDescription = useRef<HTMLTextAreaElement>(null);
//   const actionsDone = useRef<HTMLTextAreaElement>(null);
//   const counterMeasure = useRef<HTMLTextAreaElement>(null);
//   const stage1 = useRef<HTMLInputElement>(null);
//   const stage2 = useRef<HTMLInputElement>(null);
//   const stage3 = useRef<HTMLInputElement>(null);
//   const stage4 = useRef<HTMLInputElement>(null);
//   const stage5 = useRef<HTMLInputElement>(null);
//   const stage6 = useRef<HTMLInputElement>(null);
//   const [grade, setGrade] = useState<"A" | "B" | "C" | "D" | "S" | "">("");
//   const [classes, setClasses] = useState(() => {
//     const array = format.classes.map((single) => {
//       return single.class;
//     });
//     return {
//       value: "",
//       array: array,
//     };
//   });
//   const [action, setAction] = useState({
//     selected: "",
//     status: "",
//     array: [],
//     plan: "",
//   });
//   const [responsibility, setResponsibility] = useState("");
//   const [date, setDate] = useState<Date | undefined>(undefined);
//
//   const content = (
//     <div>
//       <h1>test</h1>
//     </div>
//   );
//
//   return (
//     <ModalFull
//       onClose={onClose}
//       type={"medium"}
//       title={"New Problem registration"}
//     >
//       {content}
//     </ModalFull>
//   );
// };
//
// export default NewProblemRegistration;
