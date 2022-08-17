import React, { useEffect } from "react";
import PostCard from "../post_card/PostCard";
import axios from "axios";
import { useState } from "react";
import {
  PaginationContainer,
  PostCardImg,
  PostPaginationWrapper,
} from "./style";

// 포스트 등록폼 나열하는 컴포넌트

const PostCardList = () => {
  const [dataList, setDataList] = useState([]);

  React.useEffect(() => {
    callSomethingAxios();
  }, []);

  const callSomethingAxios = () => {
    axios({
      method: "get", // 통신할 방식
      url: "http://localhost:3001/posts", // 통신할 웹문서
    }).then((response) => {
      // console.log(response.data);
      setDataList(response.data);
    });
  };

  // console.log(dataList);

  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {dataList.map((data, index) => (
          <PostCard key={index}>
            <PostCardImg
              src={data.image}
              // src="img/default_img.jpeg"
              onerror="img/default_img.jpeg"
            />
          </PostCard>
        ))}
      </PaginationContainer>
    </PostPaginationWrapper>
  );
};

export default PostCardList;
