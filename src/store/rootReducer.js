import { combineReducers } from '@reduxjs/toolkit';
import toasterReducer from '../slices/toasterSlice';
import landingReducer from '../pages/LandingPage/slice';

const reducerList = {
  toaster: toasterReducer,
  landing: landingReducer,
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
