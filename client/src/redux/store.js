import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userReducer"
import hospitalSlice from "./hospitalReducer"
import userDetailSlice from "./userDetailReducer"
export const store = configureStore({
  reducer: {
    user: userSlice,
    hospital:hospitalSlice,
    userDetail: userDetailSlice



 
  },
}); 