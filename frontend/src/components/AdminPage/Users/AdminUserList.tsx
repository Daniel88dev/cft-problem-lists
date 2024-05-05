import { useEffect, useState, type MouseEvent, useRef } from "react";
import { UserType } from "../AdminTypes.ts";
import { ALL_USERS_DEFAULT } from "../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import TableMain from "../../UI/Tables/TableMain.tsx";
import TableHeading from "../../UI/Tables/TableHeading.tsx";
import TableRow from "../../UI/Tables/TableRow.tsx";
import Th from "../../UI/Tables/Th.tsx";
import ImageTablePerson from "../../UI/Persons/ImageTablePerson.tsx";
import FilledButton from "../../UI/Buttons/FilledButton.tsx";
import Notification, { ChildMethods } from "../../UI/Notification.tsx";
import UserEditPermission from "./component/UserEditPermission.tsx";

const AdminUserList = () => {
  const [userList, setUserList] = useState<UserType[]>([]);
  const [userForEdit, setUserForEdit] = useState<UserType | null>(null);
  const notifyRef = useRef<ChildMethods>(null);

  useEffect(() => {
    setUserList(ALL_USERS_DEFAULT);
  }, []);

  const onUserEditClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if ("id" in event.currentTarget.attributes) {
      const id = Number(
        (event.currentTarget.attributes.getNamedItem("id") as Attr).value
      );
      const findUser = userList.find((user) => user.id === id);
      setUserForEdit(findUser!);
    }
  };

  const onUserEditClose = () => {
    setUserForEdit(null);
  };

  const onUserEditSubmit = (newUser: UserType) => {
    const newUserArray = userList.map((user) => {
      if (user.id === newUser.id) {
        return newUser;
      } else {
        return user;
      }
    });
    setUserList(newUserArray);
    setUserForEdit(null);
    if (notifyRef.current) {
      notifyRef.current.setNotify("User updated", "basic");
    }
  };

  console.log(userForEdit);

  return (
    <>
      <div className={"flex flex-col justify-self-start mx-auto ml-8"}>
        <h1 className={"text-left text-2xl px-2 underline"}>User list</h1>
        <TableMain>
          <TableHeading>
            <Th width={"w-24"}>User ID</Th>
            <Th width={"w-48"}>Name</Th>
            <Th width={"w-24"}>User Picture</Th>
            <Th width={"w-48"}>E-mail</Th>
            <Th width={"w-48"}>Section</Th>
            <Th width={"w-48"}>Activated User</Th>
            <Th width={"w-48"}>Security permission</Th>
            <Th width={"w-48"}>Admin permission</Th>
            <Th width={"w-48"}>Super Admin permission</Th>
            <Th width={"w-24"}>Edit</Th>
          </TableHeading>
          <tbody>
            {userList.map((user) => (
              <TableRow key={user.id} height={"h-24"}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <ImageTablePerson imageSrc={user.image} imageName={user.name} />
                <td>{user.email}</td>
                <td>{user.designation.designationName}</td>
                <td>{user.active ? "YES" : "NO"}</td>
                <td>{user.security ? "YES" : "NO"}</td>
                <td>{user.isAdmin ? "YES" : "NO"}</td>
                <td>{user.isSuperAdmin ? "YES" : "NO"}</td>
                <td>
                  <FilledButton
                    id={user.id.toString()}
                    onClick={onUserEditClick}
                    className={"mt-2"}
                  >
                    Edit
                  </FilledButton>
                </td>
              </TableRow>
            ))}
          </tbody>
        </TableMain>
      </div>
      {userForEdit && (
        <UserEditPermission
          userData={userForEdit}
          onClose={onUserEditClose}
          onSubmit={onUserEditSubmit}
        />
      )}
      <Notification ref={notifyRef} />
    </>
  );
};

export default AdminUserList;
