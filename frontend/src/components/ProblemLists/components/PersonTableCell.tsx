import { AnimatedTooltip } from "../../UI/Persons/AnimatedTooltip.tsx";
import { AllUsersType } from "../Store/ProblemListTypes.tsx";

export function PersonTableCell({ users }: { users: AllUsersType[] }) {
  return (
    <td className={"flex-grow min-w-96 w-96"}>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={users} />
      </div>
    </td>
  );
}
