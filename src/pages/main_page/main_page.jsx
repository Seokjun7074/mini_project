import React from "react";
import PostCardList from "../../components/post_card_list/PostCardList";
import PostForm from "../../components/post_form/PostForm";
import MainHeader from "../../components/main_header/MainHeader";
const MainPage = () => {
  return (
  <div>
    <MainHeader/>
    <PostCardList/>
  </div>
  )
}

export default MainPage;