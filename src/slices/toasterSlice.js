import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  toastObj: {
    value: false,
    message: '',
    variant: '',
  },
};
const toaster = createSlice({
  name: 'toaster',
  initialState,
  reducers: {
    updateToast(state, action) {
      state.toastObj = action.payload;
    },
  },
});
export const { updateToast } = toaster.actions;
export default toaster.reducer;
