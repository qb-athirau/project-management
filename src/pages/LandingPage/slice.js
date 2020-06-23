import { createSlice } from '@reduxjs/toolkit';

const initialState = { projects: [] };

const landing = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = landing.actions;
export default landing.reducer;
