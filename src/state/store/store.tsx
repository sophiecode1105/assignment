import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData";
import searchDataReducer from "./searchData";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    searchData: searchDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
