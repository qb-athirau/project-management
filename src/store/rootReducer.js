import { combineReducers } from '@reduxjs/toolkit';
import toasterReducer from '../slices/toasterSlice';

const reducerList = {
  toaster: toasterReducer,
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
