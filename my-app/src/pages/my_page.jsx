import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostCard from "../components/post_card/PostCard";
import axios from "axios"

// 마이페이지

const MyPage = () => {
 
  const [dataList, setDataList] = useState([]);

  React.useEffect(()=> {
    callSomethingAxios(); 
  },[])

  const callSomethingAxios = () => { 
    axios.get("http://localhost:3001/mypage").then(response => { 
      console.log(response.data)
      setDataList(response.data)
    })
  }
  
  return (
    <div>
      
        {dataList.map((data, index)=> (
          <PostCard key={index} value={data} />

        ))}
      {/* <PostCard value={data[0]} />
      <PostCard value={data[1]} />
      <PostCard value={data[2]} /> */}
    </div> 

  )
}



export default MyPage;