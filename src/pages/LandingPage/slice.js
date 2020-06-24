import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  loading: false,
};

const landing = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectStart(state) {
      state.loading = true;
    },
    setProjects(state, action) {
      state.projects = action.payload;
      state.loading = false;
    },
    addProjects(state, action) {
      state.projects.push(action.payload);
      state.loading = false;
    },
    setProjectFailure(state) {
      state.loading = false;
    },
  },
});

export const { setProjectStart, setProjects, addProjects, setProjectFailure } = landing.actions;
export default landing.reducer;
