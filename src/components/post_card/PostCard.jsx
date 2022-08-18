import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { PostCardWrapper } from "./style";

const PostCard = (props) => {
  // const navigate = useNavigate();
  console.log(props)
  return (
    <Link to={`/detail/${props.id}`}>
      <PostCardWrapper>{props.children}</PostCardWrapper>
    </Link>
  );
};

export default PostCard;
