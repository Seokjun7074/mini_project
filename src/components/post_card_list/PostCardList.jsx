import React, { useEffect } from "react";
import PostCard from "../post_card/PostCard";
import "./style.css";
import axios from "axios";
import { useState } from "react";

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
      console.log(response.data);
      setDataList(response.data);
    });
  };

  console.log(dataList);

  return (
    <div>
      {dataList.map((data, index) => (
        <PostCard key={index} value={data} />
      ))}
      {/* <PostCard value={data[0]} />
      <PostCard value={data[1]} />
      <PostCard value={data[2]} /> */}
    </div>
  );
};

export default PostCardList;
