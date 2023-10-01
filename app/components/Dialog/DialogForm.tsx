import DialogAction from "./DialogAction";

export interface DialogFormPropsType {
  handleSubmit: () => void;
  handleCancel: () => void;
  cancelButtonText: string;
  confirmButtonText: string;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
  children: React.ReactNode;
}

export const DialogForm = ({
  cancelButtonText,
  confirmButtonText,
  confirmButtonClassName,
  cancelButtonClassName,
  handleSubmit,
  handleCancel,
  children
}: any) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {children}
        <div className="flex items-start justify-end gap-4 pt-8">
          <DialogAction handleCancel={handleCancel}
            cancelButtonText={cancelButtonText} 
            confirmButtonText={confirmButtonText}
            confirmButtonClassName={confirmButtonClassName}
            cancelButtonClassName={cancelButtonClassName}
          />
        </div>
      </form>
    </>
  );
};

export default DialogForm;
