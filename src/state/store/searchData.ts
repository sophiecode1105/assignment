import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserDataList, UserSubDataList } from "../../model/user";
import { Direction, SortKey, FOX, GOLF, DEFAULT } from "../../model/constants";

interface SearchDataState {
  value: string;
}

const initialState: SearchDataState = {
  value: "",
};

export const SearchDataSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    updateSearchText: (state, action: PayloadAction<{ searchText: string }>) => {
      state.value = action.payload.searchText;
    },
  },
});

export const { updateSearchText } = SearchDataSlice.actions;
export default SearchDataSlice.reducer;
