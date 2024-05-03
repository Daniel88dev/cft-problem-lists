import { OrganisationUserType } from "../../AdminTypes.ts";
import OrganisationUserDetail from "./OrganisationUserDetail.tsx";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";

type OrganisationListType = {
  listName: string;
  userList: OrganisationUserType[];
};

const OrganisationList = ({ listName, userList }: OrganisationListType) => {
  return (
    <div
      className={
        "flex-col mx-2 border border-black dark:border-white rounded-2xl min-w-64 w-auto h-auto m-2"
      }
    >
      <h2
        className={
          "text-xl underline bg-violet-500 rounded-t-2xl text-white dark:bg-gray-950"
        }
      >
        {listName}
      </h2>
      {userList.map((user) => (
        <OrganisationUserDetail key={`${listName}${user.id}`} userData={user} />
      ))}
      <div className={"flex justify-center"}>
        <FilledButton>Edit</FilledButton>
      </div>
    </div>
  );
};

export default OrganisationList;
