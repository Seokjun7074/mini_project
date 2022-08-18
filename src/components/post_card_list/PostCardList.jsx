import { useEffect } from "react";
import PostCard from "../post_card/PostCard";
import {
  PaginationContainer,
  PostCardImg,
  PostPaginationWrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/async/postThunk";

const PostCardList = () => {
  const dispatch = useDispatch();
  const postDataList = useSelector((state) => state.post.postList);

  useEffect(() => {
    getPostData();
  }, [dispatch]);

  const getPostData = () => {
    dispatch(__getPost());
  };
  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {postDataList.map((data, index) => (
          //나중에 포스트 아이디로 바꿔야함
          <PostCard key={data.post_id} id={data.post_id}>
            <PostCardImg
              src={data.imgUrl ? data.imgUrl : "img/default_img.jpeg"}
              onerror="img/default_img.jpeg"
            />
          </PostCard>
        ))}
      </PaginationContainer>
    </PostPaginationWrapper>
  );
};

export default PostCardList;
