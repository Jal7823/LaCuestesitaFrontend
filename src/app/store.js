import { configureStore } from "@reduxjs/toolkit";
import userToken from "../reducer/userToken";

export const store = configureStore({
  reducer: {
    user: userToken,
  },
});
