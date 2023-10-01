import { FC } from "react";

const AddUserFormContent: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 relative ">
        <label htmlFor="email" className="font-medium text-sm">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="abc@gmail.com"
          className="text-xs"
        />
      </div>
    </div>
  );
};

export default AddUserFormContent;
