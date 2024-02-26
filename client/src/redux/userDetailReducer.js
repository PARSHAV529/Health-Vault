import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: undefined,
  loading: false,
  error: "",
};
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    userDetailRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    userDetailSuccess: (state, action) => {
      state.userDetail = action.payload;
      state.loading = false;
      state.error = "";
    },
    userDetailFail: (state, action) => {
      state.userDetail = undefined;
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state, action) => {
      state.loading = false;
      state.error = undefined;
    },
   
  },
});

export const { userDetailRequest, userDetailSuccess, userDetailFail, userDetailLogout, clearError } =
  userDetailSlice.actions;

export default userDetailSlice.reducer;
