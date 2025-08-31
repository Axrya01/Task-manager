import { Project } from "@/interfaces/task-interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectList: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjectList } = projectSlice.actions;

export default projectSlice.reducer;
