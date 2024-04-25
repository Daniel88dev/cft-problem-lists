import { ColorType } from "./AdminTypes.ts";

type AdminProjectColorPreviewType = {
  data: ColorType;
};

const AdminProjectColorPreview = ({ data }: AdminProjectColorPreviewType) => {
  const style = {
    background: data.color,
    color: data.text,
  };

  return (
    <div className={"mx-2 my-2 flex-col"}>
      <label
        className={
          "block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        }
      >
        Preview:
      </label>
      <div className={"mt-4 mx-2 w-20 border-white border-2"} style={style}>
        {data.name}
      </div>
    </div>
  );
};

export default AdminProjectColorPreview;
