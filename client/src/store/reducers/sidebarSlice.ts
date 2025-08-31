import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SidebarState } from "@/interfaces/task-interfaces";

const initialState: SidebarState = {
  sidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
