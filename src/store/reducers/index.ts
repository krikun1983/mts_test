import { combineReducers } from '@reduxjs/toolkit';
import adminShowReducer from './adminShowReducer';
import formAddDevicesReducer from './formAddDevicesReducer';
import formSearchValueReducer from './formSearchReducer';

const rootReducer = combineReducers({
  isAdminShow: adminShowReducer,
  formAddDevices: formAddDevicesReducer,
  nameSearch: formSearchValueReducer,
  ipAddressSearch: formSearchValueReducer,
});

export default rootReducer;
