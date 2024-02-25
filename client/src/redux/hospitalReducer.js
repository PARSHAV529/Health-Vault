import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospital: undefined,
  loading: false,
  error: "",
};
const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    hospitalRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    hospitalSuccess: (state, action) => {
      state.hospital = action.payload;
      state.loading = false;
      state.error = "";
    },
    hospitalFail: (state, action) => {
      state.hospital = undefined;
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state, action) => {
      state.loading = false;
      state.error = undefined;
    },
    hospitalLogout: (state) => {
      state.hospital = undefined;
      state.loading = false;
      state.error = "";
    },
  },
});

export const { hospitalRequest, hospitalSuccess, hospitalFail, hospitalLogout, clearError } =
  hospitalSlice.actions;

export default hospitalSlice.reducer;