"use client";

import { useEffect, useState } from "react";
import Dialog, {DialogHeader, DialogContent, DialogAction, DialogForm} from "./components/Dialog";
import AddUserFormContent from "./components/AddUserFormContent";
import ConfirmDialog from "./components/ConfirmDialog";
import Button from "./components/Button";

export default function Home() {
  const [isShowFirstmodal, setIsShowFirstmodal] = useState(false);
  const [isShowSecondModal, setIsShowSecondModal] = useState(false);
  const [isShowSuccessDialog, setIsShowSuccessDialog] = useState(false);

  const showFirstModal = () => {
    setIsShowFirstmodal(true);
  };

  const handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsShowSecondModal(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('User Added Successfully..!!');
    setIsShowFirstmodal(false);
    setIsShowSuccessDialog(true);
  };

  const closeSecondModal = () => {
    setIsShowSecondModal(false);
  };

  const handleCloseAll = () => {
    setIsShowFirstmodal(false);
    setIsShowSecondModal(false);
  };

  const handleCloseSuccessDialog = () => {
    setIsShowSuccessDialog(false);
  }

  //Close the Success dialog after 3000 ms.
  useEffect(() => {
    if (isShowSuccessDialog) {
      setTimeout(() => {
        handleCloseSuccessDialog();
      }, 3000);
    }
  }, [isShowSuccessDialog])
  

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center"
          buttonText="Add New User"
          onClick={showFirstModal}
        />
      </div>
      {/*Add User Dialog*/}
      <Dialog open={isShowFirstmodal}>
        <DialogHeader title="Add User"/>
        <DialogContent>
          <DialogForm handleCancel={handleCancel}
            handleSubmit={handleSubmit}
            confirmButtonText='Add User'
            cancelButtonText='Cancel'
            confirmButtonClassName='text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
            cancelButtonClassName='hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'
          >
            <AddUserFormContent />
          </DialogForm>
        </DialogContent>
      </Dialog>
      {/*Confirm dialog for cancel Add User*/}
      <Dialog open={isShowSecondModal} className='pb-8 pt-8'>
        <DialogContent>
          <ConfirmDialog
            message="Are you sure you want to discard the changes?"
          />
        </DialogContent>
        <DialogAction handleCancel={closeSecondModal}
          handleConfirm={handleCloseAll}
          confirmButtonText='Yes'
          cancelButtonText='No'
          confirmButtonClassName='text-white bg-red-500 dark:bg-red-500 hover:bg-red-700'
          cancelButtonClassName='border border-gray-100 hover:bg-gray-100 dark:bg-gray-800'
        />
      </Dialog>
      {/*Success Dialog - Showing after user addedd successfully.*/}
      <Dialog open={isShowSuccessDialog} className='pb-8 pt-8'>
        <DialogContent>
          <ConfirmDialog
            heading='Thank You!!!'
            message="User Added Successfully:)"
          />
        </DialogContent>
        <DialogAction handleConfirm={handleCloseSuccessDialog}
          confirmButtonText='Ok'
          confirmButtonClassName='text-white bg-blue-500 dark:bg-blue-500 hover:bg-blue-600'
          className='justify-center'
        />
      </Dialog>
    </>
  );
}
