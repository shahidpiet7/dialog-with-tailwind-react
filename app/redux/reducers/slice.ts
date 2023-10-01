import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  firstModalIsOpen: boolean;
  secondModalIsOpen: boolean;
}

const initialState: ModalState = {
  firstModalIsOpen: false,
  secondModalIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openFirst: (state: ModalState) => {
      state.firstModalIsOpen = true;
    },
    closeFirst: (state: ModalState) => {
      state.firstModalIsOpen = false;
    },
    openSecond: (state: ModalState) => {
      state.secondModalIsOpen = true;
    },
    closeSecond: (state: ModalState) => {
      state.secondModalIsOpen = false;
    },
    closeAll: (state: ModalState) => {
      state.firstModalIsOpen = false;
      state.secondModalIsOpen = false;
    },
  },
});

export const { openFirst, closeFirst, openSecond, closeSecond, closeAll } = modalSlice.actions;
export default modalSlice.reducer;
