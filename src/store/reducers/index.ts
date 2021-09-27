import { combineReducers } from '@reduxjs/toolkit';
import adminShowReducer from './adminShowReducer';
import formAddDevicesReducer from './formAddDevicesReducer';

const rootReducer = combineReducers({
  isAdminShow: adminShowReducer,
  formAddDevices: formAddDevicesReducer,
});

export default rootReducer;
