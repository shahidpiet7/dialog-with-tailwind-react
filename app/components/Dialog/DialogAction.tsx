import {FC} from 'react';
import {cn} from "@/app/utils";
import Button from "../Button";

interface DialogActionPropsTypes {
  handleCancel?: () => void;
  handleConfirm?: () => void;
  openSecondModel?: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  cancelButtonClassName?: string;
  confirmButtonClassName?: string;
  className?: string;
};

export const DialogAction: FC<DialogActionPropsTypes> = ({
  handleCancel,
  handleConfirm,
  confirmButtonText,
  cancelButtonText,
  cancelButtonClassName,
  confirmButtonClassName,
  className
}: DialogActionPropsTypes) => {
  return (
    <div className="flex flex-col gap-6">
      <div className={cn('flex items-start justify-end gap-4', className)}>
        {cancelButtonText && (
          <Button className={cancelButtonClassName}
            buttonText={cancelButtonText}
            onClick={handleCancel}
          />
        )}
        {confirmButtonText && (
          <Button className={confirmButtonClassName}
            buttonText={confirmButtonText}
            onClick={handleConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default DialogAction;
