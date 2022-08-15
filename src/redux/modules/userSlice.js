import { createSlice } from "@reduxjs/toolkit";
import { __login } from "../async/userThunk";

const initialState = {
  username: "",
  password: "",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__login.pending]: (state, action) => {
      console.log("pending...");
    },
    [__login.fulfilled]: (state, action) => {
      //   console.log("fulfilled", action.payload);
      state.username = action.payload.username;
      state.password = action.payload.password;
      // 받아온 토큰을 쿠키에 저장하기
    },
    [__login.rejected]: (state, action) => {},
  },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
