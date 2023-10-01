interface confirmDialogPropeTypes {
  heading?: string;
  message: string;
}

const ConfirmDialog: React.FC<confirmDialogPropeTypes> = ({
  message,
  heading
}: confirmDialogPropeTypes) => {
  return (
    <div className="pt-6 pb-6 text-[#212427] bg-white rounded-lg flex flex-col gap-3 items-center">
      <h2 className='text-3xl'>{heading}</h2>
      <div>{message}</div>
    </div>
  );
};

export default ConfirmDialog;
