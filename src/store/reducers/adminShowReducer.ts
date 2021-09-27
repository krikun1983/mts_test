import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isAdminShow: false,
};

export const adminShowOpen = createAction('AdminShowOpen');
export const adminShowClose = createAction('AdminShowClose');

const adminShowReducer = createReducer(initialState, builder => {
  builder
    .addCase(adminShowOpen, state => {
      state.isAdminShow = true;
    })
    .addCase(adminShowClose, state => {
      state.isAdminShow = false;
    });
});
export default adminShowReducer;
