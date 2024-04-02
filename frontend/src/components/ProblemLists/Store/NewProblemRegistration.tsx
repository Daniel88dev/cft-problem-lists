// import ModalFull from "../../UI/ModalFull.tsx";
// import useProblemListContext from "./ProblemListContext.tsx";
// import { useRef, useState } from "react";
// import { UserType } from "./ProblemListTypes.tsx";
// import InputText from "../../UI/Input/InputText.tsx";
// import InputTextArea from "../../UI/Input/InputTextArea.tsx";
// import InputCheckbox from "../../UI/Input/InputCheckbox.tsx";
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
//   const responsibilityArray = format.allUsers.map((user) => {
//     return {
//       value: user.id,
//       label: `${user.name} - ${user.designation}`,
//     };
//   });
//
//   const content = (
//     <div className={"w-full"}>
//       <InputText id={"problemName"} label={"Problem Name:"} ref={problemName} />
//       <p className={"text-sm px-2"}>
//         Functionality to load picture later on with database implementation
//       </p>
//       <InputTextArea
//         id={"problemDescription"}
//         label={"Problem Description"}
//         ref={problemDescription}
//         rows={5}
//       />
//       <InputTextArea
//         id={"actionsDone"}
//         label={"Actions done:"}
//         ref={actionsDone}
//       />
//       <h4 className={"my-2 mx-2 text-sm"}>Stages:</h4>
//       <div className={"flex"}>
//         <InputCheckbox
//           id={"stage1"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage1}
//         />
//         <InputCheckbox
//           id={"stage2"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage2}
//         />
//         <InputCheckbox
//           id={"stage3"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage3}
//         />
//         <InputCheckbox
//           id={"stage4"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage4}
//         />
//         <InputCheckbox
//           id={"stage5"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage5}
//         />
//         <InputCheckbox
//           id={"stage6"}
//           label={activeProject.stages.stage1}
//           defaultChecked={false}
//           ref={stage6}
//         />
//       </div>
//       <InputTextArea
//         id={"countermeasure"}
//         label={"Countermeasure:"}
//         ref={counterMeasure}
//       />
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
