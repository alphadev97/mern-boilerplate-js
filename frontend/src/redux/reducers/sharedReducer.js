import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = sharedSlice.actions;

export default sharedSlice.reducer;
