import { createAction, createReducer } from '@reduxjs/toolkit';
import { FormAddDevice, FormAddDevicesState } from '../../types/form-add-device';

const initialState: FormAddDevicesState = {
  formAddDevices: [],
};

export const formAddDevicesAction = createAction('formAddDevicesAction', (data: FormAddDevice) => {
  return {
    payload: data,
  };
});

const formAddDevicesReducer = createReducer(initialState, builder => {
  builder.addCase(formAddDevicesAction, (state, action) => {
    state.formAddDevices.push(action.payload);
  });
});

export default formAddDevicesReducer;
