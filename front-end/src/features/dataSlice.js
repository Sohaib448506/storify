import { createSlice } from "@reduxjs/toolkit";

export const APISlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    emailData: null,
  },
  reducers: {
    userData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userData } = APISlice.actions;

export const APIUserData = (state) => state.data;

export default APISlice.reducer;
