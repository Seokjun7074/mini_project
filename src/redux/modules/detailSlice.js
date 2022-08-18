import { createSlice } from "@reduxjs/toolkit";
import { __getDetail, __postDetail } from "../async/detailThunk";

const initialState = {
  detail: {},
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    // 전체리스트 불러오기
    [__getDetail.pending]: (state, action) => {},
    [__getDetail.fulfilled]: (state, action) => {
      // console.log("데이터 불러오기 성공");
      // state = action.payload; //실서버
      state.detail = action.payload; //더미서버
    },
    [__getDetail.rejected]: (state, action) => {
      console.log("데이터 불러오기 실패");
    },

    // 작성부분
    [__postDetail.pending]: (state, action) => {
      // console.log("데이터 불러오기  중...");
    },
    [__postDetail.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.detail = action.payload; //더미서버
      console.log("aa", state.detail);
    },
    [__postDetail.rejected]: (state, action) => {
      console.log("데이터 불러오기 실패");
    },
  },
});

export default detailSlice.reducer;
