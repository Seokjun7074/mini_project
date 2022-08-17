import { createSlice } from "@reduxjs/toolkit";
import { __login } from "../async/userThunk";

const initialState = {
  username: "default_username",
  // password: "default_",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__login.pending]: (state, action) => {
      console.log("로그인 중...");
    },
    [__login.fulfilled]: (state, action) => {
      console.log("로그인 성공");
      state.username = action.payload.username;
      // state.password = action.payload.password;
      // 받아온 토큰을 쿠키에 저장하기
    },
    [__login.rejected]: (state, action) => {
      console.log("로그인 실패");
      // alert("입력정보를 다시 확인하세요");
    },
  },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
