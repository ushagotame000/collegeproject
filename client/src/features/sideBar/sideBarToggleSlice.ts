import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SideBarState {
  showInfo: boolean;
}

const initialState: SideBarState = {
  showInfo: true,
};

const sideBarToggleSlice = createSlice({
  name: "sideBarToggle",
  initialState,
  reducers: {
    toggleInfo: (state) => {
      state.showInfo = !state.showInfo;
    },
  },
});

export const { toggleInfo } = sideBarToggleSlice.actions;

export const selectShowInfo = (state: RootState) => state.sideBar.showInfo;
export default sideBarToggleSlice.reducer;
