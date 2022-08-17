import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { PostCardWrapper } from "./style";

const PostCard = (props) => {
  return (
    <Link to={"/detail"}>
      <PostCardWrapper>{props.children}</PostCardWrapper>
    </Link>
  );
};

export default PostCard;
