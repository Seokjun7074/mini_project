import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./detail.css";
import Header from "../../components/header/Header";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Detail() {

  const param = useParams();
  console.log(param);

  const [data, setData] = useState({});

  useEffect(()=> {
    callSomethingAxios(); 
  },[])

  const callSomethingAxios = () => { 
    axios({
      method: "get", // 통신할 방식
      url:"http://localhost:3001/posts/" // 통신할 웹문서
    }).then(response => { 
      console.log(response.data)
      // setData(response.data)
      const newData = response.data.find((data)=>`${data.id}`===`${param.id}`)
      if (newData){
          setData(newData)
      }
    })
  }


  return (
    <div className="wrap">
      <Header></Header>
      <div className="layout">
        <br />
      <Stack 
        // style ={{border: "1px solid red"}}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className="image">{data.imageUrl?? ""}</Item>
        <Item className="itemname">{data.product?? ""}</Item>
      </Stack>
      <br />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className="titledesign">{data.title?? ""}</Item>
        <Item className="postinginfo">{data.username?? ""}</Item>
        <Item className="postinginfo">{data.CreatedAt?? ""}</Item>
        <Item className="postinginfo">{data.LikeNum?? ""}</Item>
      </Stack>
      <br />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className="contents">{data.contents?? ""}</Item>
      </Stack>
      </div>
    </div>
      
    
  );
}

// https://mui.com/material-ui/react-stack/
