import { UserType } from "../../AdminTypes.ts";
import ModalFull from "../../../UI/ModalFull.tsx";
import { useState } from "react";
import SelectSearch, { OptionType } from "../../../UI/Select/SelectSearch.tsx";
import { DESIGNATIONS_DEFAULT } from "../../../../Assets/ADMIN_EXAMPLE_DATA.ts";
import FilledButton from "../../../UI/Buttons/FilledButton.tsx";
import BasicSelect from "../../../UI/Select/BasicSelect.tsx";

type UserEditPermissionType = {
  userData: UserType;
  onClose: () => void;
  onSubmit: (newUser: UserType) => void;
};

type UserUpdateStateType = UserType & {
  updated: boolean;
};

const UserEditPermission = ({
  userData,
  onClose,
  onSubmit,
}: UserEditPermissionType) => {
  const [updatedUserData, setUpdatedUserData] = useState<UserUpdateStateType>({
    ...userData,
    updated: false,
  });

  const designationArray: OptionType[] = DESIGNATIONS_DEFAULT.map((single) => {
    return { value: single.id, label: single.designationName };
  });

  const onChangeDesignation = (value: OptionType | null) => {
    if (value) {
      const findDesignation = DESIGNATIONS_DEFAULT.find((designation) => {
        return designation.id === Number(value.value);
      });
      setUpdatedUserData((prevState) => {
        return {
          ...prevState,
          designation: findDesignation!,
          updated: true,
        };
      });
    }
  };

  const onUserSubmit = () => {
    if (updatedUserData.updated) {
      onSubmit(updatedUserData);
    } else {
      alert("No permission was changed!");
    }
  };

  const onActiveChange = (value: string) => {
    let permission = false;
    if (value === "YES") permission = true;
    setUpdatedUserData((prevState) => {
      return {
        ...prevState,
        active: permission,
        updated: true,
      };
    });
  };

  const onSecurityChange = (value: string) => {
    let permission = false;
    if (value === "YES") permission = true;
    setUpdatedUserData((prevState) => {
      return {
        ...prevState,
        security: permission,
        updated: true,
      };
    });
  };

  const onAdminChange = (value: string) => {
    let permission = false;
    if (value === "YES") permission = true;
    setUpdatedUserData((prevState) => {
      return {
        ...prevState,
        isAdmin: permission,
        updated: true,
      };
    });
  };

  const onSuperAdminChange = (value: string) => {
    let permission = false;
    if (value === "YES") permission = true;
    setUpdatedUserData((prevState) => {
      return {
        ...prevState,
        isSuperAdmin: permission,
        updated: true,
      };
    });
  };

  const content = (
    <div className={"w-full"}>
      <h1 className={"text-xl m-2"}>User Name: {userData.name}</h1>
      <h1 className={"text-lg m-2"}>User ID: {userData.userId}</h1>
      <SelectSearch
        options={designationArray}
        onSelect={onChangeDesignation}
        label={"Select user department/section:"}
        defaultValue={{
          value: updatedUserData.designation.id,
          label: updatedUserData.designation.designationName,
        }}
        clearable={false}
      />
      <BasicSelect
        id={"active"}
        className={"w-48"}
        label={"Permission to access CFT Problem lists"}
        defaultValue={updatedUserData.active ? "YES" : "NO"}
        onChange={onActiveChange}
        valuesArray={["YES", "NO"]}
        emptyOption={false}
      />
      <BasicSelect
        id={"security"}
        className={"w-48"}
        label={
          "Permission to display pictures in CFT Problem lists on secured project"
        }
        defaultValue={updatedUserData.security ? "YES" : "NO"}
        onChange={onSecurityChange}
        valuesArray={["YES", "NO"]}
        emptyOption={false}
      />
      <BasicSelect
        id={"admin"}
        className={"w-48"}
        label={"Permission to access, and change admin menu"}
        defaultValue={updatedUserData.isAdmin ? "YES" : "NO"}
        onChange={onAdminChange}
        valuesArray={["YES", "NO"]}
        emptyOption={false}
      />
      <BasicSelect
        id={"superAdmin"}
        className={"w-48"}
        label={"Permission to access, and change everything"}
        defaultValue={updatedUserData.isSuperAdmin ? "YES" : "NO"}
        onChange={onSuperAdminChange}
        valuesArray={["YES", "NO"]}
        emptyOption={false}
      />
      <div className={"flex"}>
        <FilledButton
          onClick={onUserSubmit}
          disabled={!updatedUserData.updated}
        >
          Submit
        </FilledButton>
        <FilledButton onClick={onClose}>Cancel</FilledButton>
      </div>
    </div>
  );

  return (
    <ModalFull
      onClose={onClose}
      type={"medium"}
      title={"Edit User permissions"}
    >
      {content}
    </ModalFull>
  );
};

export default UserEditPermission;
