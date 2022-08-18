import { createSlice, current } from "@reduxjs/toolkit";
import { __getPost, __postPost } from "../async/postThunk";

const initialState = {
  postList: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // 전체리스트 불러오기
    [__getPost.pending]: (state, action) => {},
    [__getPost.fulfilled]: (state, action) => {
      // console.log("데이터 불러오기 성공");
      // state = action.payload; //실서버
      state.postList = action.payload; //더미서버
      console.log(current(state));
    },
    [__getPost.rejected]: (state, action) => {
      console.log("데이터 불러오기 실패");
    },

    // 작성부분
    [__postPost.pending]: (state, action) => {
      console.log("데이터 불러오기  중...");
    },
    [__postPost.fulfilled]: (state, action) => {
      // console.log("데이터 불러오기 성공");
      // state = action.payload; //실서버
      state.postList.push(action.payload); //더미서버
      // window.location.reload();
    },
    [__postPost.rejected]: (state, action) => {
      console.log("데이터 불러오기 실패");
    },
  },
});

export default postSlice.reducer;
