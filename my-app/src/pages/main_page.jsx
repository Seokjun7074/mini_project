import React from "react";
import PostCardList from "../components/post_card_list/PostCardList";
import PostForm from "../components/post_form/PostForm";

const MainPage = () => {
  return (
  <div>
    {/* 해더 입력하기 */}
    <PostForm />
    <PostCardList/>
  </div>
  )
}

export default MainPage;