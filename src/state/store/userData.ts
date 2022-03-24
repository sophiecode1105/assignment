import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserDataList, UserSubDataList } from "../../model/user";
import { Direction, SortKey, FOX, GOLF, DEFAULT } from "../../model/constants";
import { sortListByIdx } from "../../utils/sort/sortList";
import { stat } from "fs";

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
      if (sort !== FOX && sort !== GOLF) {
        return;
      } else if (sort === DEFAULT) {
        return;
      }
      state.value = sortListByIdx(state.value, sort, direction) as UserDataList;
    },
    updateUserDataList: (state, action: PayloadAction<UserDataList>) => {
      state.value = action.payload;
    },
    sortUserSubDataList: (state, action: PayloadAction<{ userName: string; sort: SortKey; direc: Direction }>) => {
      let sort = action.payload.sort;
      let direction = action.payload.direc;
      if (sort !== FOX && sort !== GOLF) {
        return;
      } else if (sort === DEFAULT) {
        return;
      }
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].data[0] === action.payload.userName) {
          state.value[i].subDataList = sortListByIdx(state.value[i].subDataList, sort, direction) as UserSubDataList;
        }
      }
    },
    updateUserSubDataList: (state, action: PayloadAction<{ userName: string; sublist: UserSubDataList }>) => {
      let newState = state.value.map((userData) => {
        if (userData.data[0] === action.payload.userName) {
          userData.subDataList = action.payload.sublist;
        }
        return userData;
      });
      state.value = newState;
    },
    changeSubItemCheck: (state, action: PayloadAction<{ userName: string; id: number }>) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].data[0] === action.payload.userName) {
          let targetUserData = state.value[i];
          for (let j = 0; j < targetUserData.subDataList.length; j++) {
            if (targetUserData.subDataList[j]?.data[0] === action.payload.id) {
              let targetSubData = targetUserData.subDataList[j];
              state.value[i].subDataList[j].clicked = !targetSubData.clicked;
            }
          }
        }
      }
    },
  },
});

export const { updateUserDataList, sortUserDataList, sortUserSubDataList, updateUserSubDataList, changeSubItemCheck } =
  UserDataSlice.actions;
export default UserDataSlice.reducer;
