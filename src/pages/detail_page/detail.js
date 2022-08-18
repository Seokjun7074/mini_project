import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./detail.css";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { __getDetail } from "../../redux/async/detailThunk";
import { useDispatch, useSelector } from "react-redux";
import { ImgWrapper } from "./style";
import { getCookies } from "../../shared/cookies";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Detail() {
  const [token, setToken] = useState();

  const dispatch = useDispatch();
  const param = useParams();
  const data = useSelector((state) => state.detail.detail);
  // console.log(data);

  useEffect(() => {
    dispatch(__getDetail(param.id));
    const myToken = getCookies("myToken");
    setToken(myToken);
  }, []);

  return (
    <div className="wrap">
      <Header token={token} />
      <div className="layout">
        <br />
        <Stack
          // style ={{border: "1px solid red"}}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item className="image">
            <ImgWrapper
              src={
                data.imgUrl
                  ? data.imgUrl
                  : `${process.env.PUBLIC_URL}/img/default_img.jpeg`
              }
              onerror="img/default_img.jpeg"
            />
          </Item>
          <Item className="itemname">{data.product ?? ""}</Item>
        </Stack>
        <br />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item className="titledesign">{data.title}</Item>
          <Item className="postinginfo">{data.username}</Item>
          <Item className="postinginfo">{data.CreatedAt}</Item>
          <Item className="postinginfo">{data.LikeNum}</Item>
        </Stack>
        <br />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item className="contents">{data.contents ?? ""}</Item>
        </Stack>
      </div>
    </div>
  );
}

// https://mui.com/material-ui/react-stack/
