import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface initialeStateProps {
  isVisible: boolean | null;
}

const initialState: initialeStateProps = {
  isVisible: null,
};

const modalIsVisibleSlice = createSlice({
  name: "modalIsVisibleSlice",
  initialState,
  reducers: {
    setIsModalVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsModalVisible } = modalIsVisibleSlice.actions;

export const handleIsModalVisible = (state: RootState) =>
  state.modalIsVisibleSlice.isVisible;

export default modalIsVisibleSlice.reducer;
