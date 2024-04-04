import { configureStore } from "@reduxjs/toolkit";
import activeSectionSlice from "./Slices/activeSectionSlice";
import modalIsVisibleSlice from "./Slices/modalIsVisibleSlice";

const store = configureStore({
  reducer: {
    activeSectionSlice: activeSectionSlice,
    modalIsVisibleSlice: modalIsVisibleSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
