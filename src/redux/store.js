import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/userSlice";
import post from "./modules/postSlice";
import detail from "./modules/detailSlice";
const store = configureStore({
  reducer: {
    user,
    post,
    detail,
  },
});

export default store;
