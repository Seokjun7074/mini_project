import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostCard from "../../components/post_card/PostCard";
import axios from "axios";
import { getCookies } from "../../shared/cookies";
import {
  PaginationContainer,
  PostCardImg,
  PostPaginationWrapper,
} from "../../components/post_card_list/style";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";

// 마이페이지

const MyPage = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  const token = getCookies("myToken");

  React.useEffect(() => {
    callSomethingAxios();
  }, []);

  const callSomethingAxios = () => {
    console.log(token);
    axios
      .get(`${API_URL}/api/mypage`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setDataList(response.data);
      });
  };

  return (
    <div>
      <PostPaginationWrapper>
        <PaginationContainer>
          {dataList.map((data, index) => (
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
      {/* {dataList.map((data, index) => (
        <PostCard key={index} value={data} />
      ))} */}
      {/* <PostCard value={data[0]} />
      <PostCard value={data[1]} />
      <PostCard value={data[2]} /> */}
    </div>
  );
};

export default MyPage;
