import React, { useEffect } from "react";
import PostCard from "../post_card/PostCard";
import axios from "axios";
import { useState } from "react";
import {
  PaginationContainer,
  PostCardImg,
  PostPaginationWrapper,
} from "./style";

const PostCardList = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    callSomethingAxios();
  }, []);

  const callSomethingAxios = () => {
    axios({
      method: "get", // 통신할 방식
      // url: "http://localhost:3001/posts", /// 더미서버
      url: `${API_URL}/api/posts`, // 실서버
    }).then((response) => {
      // console.log(response.data);
      setDataList(response.data);
    });
  };

  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {dataList.map((data, index) => (
          <PostCard key={index}>
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
