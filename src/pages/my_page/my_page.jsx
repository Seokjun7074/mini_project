import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostCard from "../../components/post_card/PostCard";
import axios from "axios";
import { getCookies } from "../../shared/cookies";

// 마이페이지

const MyPage = () => {
  const [dataList, setDataList] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  const token = getCookies("myToken");
  React.useEffect(() => {
    callSomethingAxios();
  }, []);

  const callSomethingAxios = () => {
    axios
      .get(`${API_URL}/api/mypage`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDataList(response.data);
      });
  };

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

export default MyPage;
