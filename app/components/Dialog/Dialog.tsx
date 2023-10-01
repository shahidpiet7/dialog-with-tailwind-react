import { FC } from "react";
import DialogCotainer from "./DialogCotainer";
import {cn} from "@/app/utils";

export interface DialogPropsType {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

const Dialog: FC<DialogPropsType> = ({open, className, children}: DialogPropsType) => {
  return (
    <DialogCotainer open={open}>
      <div className={cn('p-12 text-[#212427] bg-white rounded-lg', className)}>
        {children}
      </div>
    </DialogCotainer>
  );
};

export default Dialog;
