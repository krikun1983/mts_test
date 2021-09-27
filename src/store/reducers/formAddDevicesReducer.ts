import { createAction, createReducer } from '@reduxjs/toolkit';
import devicesTable from '../../constants/devices-table';
import { FormAddDevice, FormAddDevicesState } from '../../types/form-add-device';

const initialState: FormAddDevicesState = {
  formAddDevices: [...devicesTable],
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
