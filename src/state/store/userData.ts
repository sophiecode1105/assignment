import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataList } from "../../model/user";
import { Direction, SortKey, FOX, GOLF, DEFAULT } from "../../model/constants";
import { sortListByIdx } from "../../utils/sort/sortList";
import type { RootState } from "./store";

interface UserDataState {
  value: UserDataList;
  sortKey: SortKey;
  direction: Direction;
}

const initialState: UserDataState = {
  value: [],
  sortKey: 0,
  direction: "",
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    sortUserDataList: (state, action: PayloadAction<{ sort: SortKey; direc: Direction }>) => {
      let sort = action.payload.sort;
      let direction = action.payload.direc;
      if (sort !== FOX || sort !== GOLF) {
        return;
      } else if (sort === DEFAULT) {
        return;
      }
      state.value = sortListByIdx(state.value, sort, direction) as UserDataList;
    },
    updateUserDataList: (state, action: PayloadAction<UserDataList>) => {
      state.value = action.payload;
    },
  },
});

export default UserDataSlice.reducer;
