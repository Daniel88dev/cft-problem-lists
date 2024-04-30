import { useEffect, useState } from "react";
import { UserType } from "../AdminTypes.ts";
import { ALL_USERS_DEFAULT } from "../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import TableMain from "../../UI/Tables/TableMain.tsx";
import TableHeading from "../../UI/Tables/TableHeading.tsx";
import TableRow from "../../UI/Tables/TableRow.tsx";
import Th from "../../UI/Tables/Th.tsx";

const AdminUserList = () => {
  const [userList, setUserList] = useState<UserType[]>([]);

  useEffect(() => {
    setUserList(ALL_USERS_DEFAULT);
  }, []);

  console.log(userList);

  return (
    <div className={"flex flex-col justify-self-start mx-auto ml-8"}>
      <h1 className={"text-left text-2xl px-2 underline"}>User list</h1>
      <TableMain>
        <TableHeading>
          <Th width={"w-24"}>User ID</Th>
          <Th width={"w-48"}>Name</Th>
          <Th width={"w-24"}>User Picture</Th>
          <Th width={"w-48"}>Section</Th>
          <Th width={"w-24"}>Security permission</Th>
          <Th width={"w-24"}>Admin permission</Th>
          <Th width={"w-24"}>Super Admin permission</Th>
        </TableHeading>
        {userList.map((user) => (
          <TableRow key={user.id} height={"h-24"}>
            <td>{user.userId}</td>
            <td>{user.name}</td>
            <td>picture</td>
            <td>{user.designation.designationName}</td>
            <td>{user.security ? "YES" : "NO"}</td>
            <td>{user.isAdmin ? "YES" : "NO"}</td>
            <td>{user.isSuperAdmin ? "YES" : "NO"}</td>
          </TableRow>
        ))}
      </TableMain>
    </div>
  );
};

export default AdminUserList;
