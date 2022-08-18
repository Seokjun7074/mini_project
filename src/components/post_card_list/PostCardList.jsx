import React from "react";
import PostCard from "../post_card/PostCard";
import {
  PaginationContainer,
  PostCardImg,
  PostPaginationWrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/async/postThunk";

const PostCardList = () => {
  // const [dataList, setDataList] = useState([]);
  const dispatch = useDispatch();
  const API_URL = process.env.REACT_APP_API_URL;
  const postDataList = useSelector((state) => state.post.postList);

  React.useEffect(() => {
    // callSomethingAxios();
    getPostData();
  }, []);

  // const callSomethingAxios = () => {
  //   axios({
  //     method: "get", // 통신할 방식
  //     url: "http://localhost:3001/posts", // 더미서버
  //     // url: `${API_URL}/api/posts`, // 실서버
  //   }).then((response) => {
  //     // console.log(response.data);
  //     setDataList(response.data);
  //   });
  // };

  const getPostData = () => {
    dispatch(__getPost());
  };
  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {postDataList.map((data, index) => (
          //나중에 포스트 아이디로 바꿔야함
          <PostCard key={index} id={data.id}>
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
