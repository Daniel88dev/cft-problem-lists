import { OrganisationUserType } from "../../AdminTypes.ts";
import ImagePerson from "../../../UI/Persons/ImagePerson.tsx";

type OrganisationUserDetailType = {
  userData: OrganisationUserType;
};

const OrganisationUserDetail = ({ userData }: OrganisationUserDetailType) => {
  return (
    <div className={"flex min-w-64 w-auto h-24 p-4"}>
      <ImagePerson imageSrc={userData.image} imageName={userData.name} />
      <div className={"flex-col pl-8"}>
        <h4 className={"border-b text-nowrap w-max text-left"}>
          {userData.name}
        </h4>
        <p className={"text-left"}>{userData.designation}</p>
      </div>
    </div>
  );
};

export default OrganisationUserDetail;
