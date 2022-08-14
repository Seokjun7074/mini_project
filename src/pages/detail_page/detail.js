import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import "./detail.css"


// const dummyData = [{
//         postId: 1,
//         username: “작성자”,
//         title: "제목입니다",
//         product:”바나나우유”,
//        store : ”GS동작점”,
//        contents : “포스트”,
//        imageUrl:"/images/cancle.png",
//        CreatedAt : “2011-11-11 11:11”
//        LikeNum : “랜덤값”
//     }]; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Detail() {
  return (
    <div>
      <p/>

    
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='image'>이미지</Item>
        <Item className='itemname'>제품명</Item>
      </Stack>
      <p/>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='title'>제목</Item>
        <Item className='postinginfo'>작성자</Item>
        <Item className='postinginfo'>작성시간</Item>
        <Item className='postinginfo'>좋아요</Item>
        
      </Stack>
      <p/>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='contents'>콘텐츠</Item>
      </Stack>
    </div>
  );
}
  




// https://mui.com/material-ui/react-stack/