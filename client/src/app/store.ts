import { configureStore } from "@reduxjs/toolkit";
import sideBarToggler from "../features/sideBar/sideBarToggleSlice";
export const store = configureStore({
  reducer: {
    sideBar: sideBarToggler,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
