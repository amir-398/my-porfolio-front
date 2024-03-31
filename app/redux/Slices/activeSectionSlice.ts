import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface initialeStateProps {
  activeSection: string;
}

const initialState: initialeStateProps = {
  activeSection: "",
};

const activeSectionSlice = createSlice({
  name: "activeSectionSlice",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export const selectActiveSection = (state: RootState) =>
  state.activeSectionSlice.activeSection;
export default activeSectionSlice.reducer;
