import React from 'react';

interface DialogCotainerPropsType {
    open: boolean;
    children: React.ReactNode;
}

function DialogCotainer({open, children}: DialogCotainerPropsType) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/70 flex justify-center items-center  ${
        open ? "" : "hidden"
      } `}
    >
      {children}
    </div>
  )
}

export default DialogCotainer
