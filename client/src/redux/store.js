import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userReducer"
import hospitalSlice from "./hospitalReducer"

export const store = configureStore({
  reducer: {
    user: userSlice,
    hospital:hospitalSlice


 
  },
}); 