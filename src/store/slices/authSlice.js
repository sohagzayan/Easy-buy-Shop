import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadingUser: (state, action) => {
      state.loading = true;
      state.error = "";
      state.user = {};
    },
    addUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    },
    errorUser: (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    },
  },
});

export const { loadingUser, addUser, errorUser } = authSlice.actions;
export default authSlice.reducer;
