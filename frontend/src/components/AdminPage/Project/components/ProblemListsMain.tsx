import { ProblemListType } from "../AdminTypes.ts";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import InputText from "../../../UI/Input/InputText.tsx";
import BasicSelect from "../../../UI/Select/BasicSelect.tsx";

type ProblemListsMainType = {
  problemLists: ProblemListType[];
};

const ProblemListsMain = ({ problemLists }: ProblemListsMainType) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHeaderClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const content = (
    <>
      {problemLists.map((list) => (
        <div key={`problemList${list.problemListId}`} className={"flex"}>
          <InputText
            id={`problemList${list.problemListId}`}
            label={"Enter Problem List Name:"}
            defaultValue={list ? list.problemListName : ""}
          />
          <BasicSelect
            id={`problemListType${list.problemListId}`}
            label={"Select Problem List Type:"}
            defaultValue={list ? list.type : "BASIC"}
            onChange={(e) => console.log(e)}
            valuesArray={["BASIC", "AUDIT"]}
          />
        </div>
      ))}
    </>
  );

  return (
    <div>
      <h3
        className={"text-left text-xl px-2 underline flex"}
        onClick={onHeaderClick}
      >
        Edit Problem Lists
        {isOpen ? (
          <SlArrowUp className={"mt-1 ml-2"} />
        ) : (
          <SlArrowDown className={"mt-1 ml-2"} />
        )}
      </h3>
      {isOpen && content}
    </div>
  );
};

export default ProblemListsMain;
