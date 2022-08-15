import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const PostCard = (props) => {//props.post에는 게시글 하나가 담김
  const post = props.value
  console.log(post)

  return (
    <Link to={'/post/'+post.id}>
    <div className="post-box">
     <p>{post.title}</p>
      <p>{post.product}</p>
       <img src={post.imageUrl} alt="배경이미지"/>
    </div>
    </Link>
  )
}


export default PostCard;
