import { configureStore } from "@reduxjs/toolkit";
import sideBarToggler from "../features/sideBar/sideBarToggleSlice";
import contactReducer from "../features/selectedContact/selectedContactSlice";
import authSlice from "../features/users/authSlice";
export const store = configureStore({
  reducer: {
    sideBar: sideBarToggler,
    contact: contactReducer,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
