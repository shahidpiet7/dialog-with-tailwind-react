import { FC } from "react";

interface DialogContentPropsType {
  children: React.ReactNode;
};

export const DialogContent: FC<DialogContentPropsType> = ({children}: DialogContentPropsType) => {
  return (
    <>
      {children}
    </>
  );
};

export default DialogContent;
