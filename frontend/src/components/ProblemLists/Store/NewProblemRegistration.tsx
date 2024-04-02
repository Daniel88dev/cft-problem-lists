// import ModalFull from "../../UI/ModalFull.tsx";
// import useProblemListContext from "./ProblemListContext.tsx";
// import { useRef, useState } from "react";
// import { ProblemListDataType, UserType } from "./ProblemListTypes.tsx";
// import InputText from "../../UI/Input/InputText.tsx";
// import InputTextArea from "../../UI/Input/InputTextArea.tsx";
// import InputCheckbox from "../../UI/Input/InputCheckbox.tsx";
// import SelectSearch, { OptionType } from "../../UI/Select/SelectSearch.tsx";
// import GradeSelect from "../../UI/Select/GradeSelect.tsx";
// import BasicSelect from "../../UI/Select/BasicSelect.tsx";
// import DatePicker from "../../UI/CalendarPicker/DatePicker.tsx";
// import FilledButton from "../../UI/Buttons/FilledButton.tsx";
//
// type ActionType = {
//   selected: string;
//   status: string;
//   array: string[];
//   plan: boolean;
// };
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
//   const [action, setAction] = useState<ActionType>({
//     selected: "",
//     status: "",
//     array: [],
//     plan: false,
//   });
//   const [responsibility, setResponsibility] = useState<UserType | null>(null);
//   const [date, setDate] = useState<Date | undefined>(undefined);
//
//   const responsibilityArray = format.allUsers.map((user) => {
//     return {
//       value: user.id,
//       label: `${user.name} - ${user.designation}`,
//     };
//   });
//
//   const onResponsibleChange = (value: OptionType | null) => {
//     if (value) {
//       const findUser = format.allUsers.find((user) => {
//         return user.id === value.value;
//       });
//       setResponsibility(findUser!);
//     }
//   };
//
//   const onSubmit = () => {
//     if (
//       !stage1.current ||
//       !stage2.current ||
//       !stage3.current ||
//       !stage4.current ||
//       !stage5.current ||
//       !stage6.current
//     ) {
//       return alert("Stage selection error!");
//     }
//     if (grade === "") {
//       return alert("Select grade!");
//     }
//     if (
//       !problemName.current ||
//       !problemDescription.current ||
//       !actionsDone.current ||
//       !counterMeasure.current
//     ) {
//       return alert("Problem with filled form!");
//     }
//     if (action.plan && date === undefined) {
//       return alert("Fill date!");
//     }
//     const editedData: ProblemListDataType = {
//       id: 99, //todo add logic for random number
//       item: 99, //todo add logic for random number
//       stages: {
//         Stage1: stage1.current.checked,
//         Stage2: stage2.current.checked,
//         Stage3: stage3.current.checked,
//         Stage4: stage4.current.checked,
//         Stage5: stage5.current.checked,
//         Stage6: stage6.current.checked,
//       },
//       picture: "",
//       problemName: problemName.current.value,
//       problemDescription: problemDescription.current.value,
//       actionsDone: actionsDone.current.value,
//       counterMeasure: counterMeasure.current.value,
//       grade: grade,
//       class: classes.value,
//       action: action.selected,
//       status: action.status,
//       plan: date,
//       responsibility: responsibility,
//       listeners: dataForEdit.listeners,
//     };
//
//     onSubmitData(editedData);
//   };
//
//   const onChangeClass = (value: string) => {
//     setClasses((prevState) => {
//       return {
//         ...prevState,
//         value: value,
//       };
//     });
//     const findStatus = format.actions.filter((action) => {
//       return action.class === value;
//     });
//     const array = findStatus.map((status) => {
//       return status.action;
//     });
//     setAction({
//       selected: "---",
//       array: array,
//       status: "---",
//       plan: false,
//     });
//     setDate(undefined);
//   };
//
//   const onStatusChange = (value: string) => {
//     if (value === "---") {
//       setAction((prevState) => {
//         return {
//           ...prevState,
//           selected: "---",
//           status: "---",
//           plan: false,
//         };
//       });
//       setDate(undefined);
//     } else {
//       const findStatus = format.actions.find((action) => {
//         return action.class === classes.value && action.action === value;
//       });
//
//       setAction((prevState) => {
//         return {
//           ...prevState,
//           selected: value,
//           status: findStatus!.status,
//           plan: findStatus!.plan,
//         };
//       });
//       setDate(undefined);
//     }
//   };
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
//       <SelectSearch
//         options={responsibilityArray}
//         onSelect={onResponsibleChange}
//         label={"Select responsible person:"}
//         clearable={false}
//         defaultValue={{
//           label: `${format.user.name} - ${format.user.designation}`,
//           value: format.user.id,
//         }}
//       />
//       <GradeSelect
//         defaultValue={grade}
//         onSelect={(e) => setGrade(e)}
//         label={"Select Grade:"}
//         id={"grade"}
//       />
//       <BasicSelect
//         id={"class"}
//         label={"Select class:"}
//         defaultValue={classes.value}
//         onChange={onChangeClass}
//         valuesArray={classes.array}
//       />
//       <BasicSelect
//         id={"status"}
//         label={"Select action:"}
//         defaultValue={action.selected}
//         onChange={onStatusChange}
//         valuesArray={action.array}
//       />
//       <DatePicker
//         id={"date"}
//         label={"Select Date:"}
//         date={date}
//         disabled={!action.plan}
//         onDateChange={setDate}
//       />
//       <h3 className={"px-2"}>Status of problem: {action.status}</h3>
//       <div className={"flex"}>
//         <FilledButton onClick={}>Submit</FilledButton>
//         <FilledButton onClick={onClose}>Cancel</FilledButton>
//       </div>
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
