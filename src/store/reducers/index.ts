import { combineReducers } from '@reduxjs/toolkit';
import adminShowReducer from './adminShowReducer';

const rootReducer = combineReducers({
  isAdminShow: adminShowReducer,
});

export default rootReducer;
