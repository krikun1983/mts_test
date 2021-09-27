import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  nameSearch: '',
  ipAddressSearch: '',
};

export const formSearchValueNameAction = createAction('formSearchValueNameAction', (str: string) => {
  return {
    payload: str,
  };
});

export const formSearchValueIpAddressAction = createAction('formSearchValueIpAddressAction', (str: string) => {
  return {
    payload: str,
  };
});

const formSearchValueReducer = createReducer(initialState, builder => {
  builder
    .addCase(formSearchValueNameAction, (state, action) => {
      state.nameSearch = action.payload;
    })
    .addCase(formSearchValueIpAddressAction, (state, action) => {
      state.ipAddressSearch = action.payload;
    });
});

export default formSearchValueReducer;
