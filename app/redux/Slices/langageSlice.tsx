import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface initialeStateProps {
  langage: string;
}

const initialState: initialeStateProps = {
  langage: "fr",
};

const langageSlice = createSlice({
  name: "langageSlice",
  initialState,
  reducers: {
    setLangage(state, action: PayloadAction<string>) {
      state.langage = action.payload;
    },
  },
});

export const { setLangage } = langageSlice.actions;

export const handleIsModalVisible = (state: RootState) =>
  state.langageSlice.langage;

export default langageSlice.reducer;
