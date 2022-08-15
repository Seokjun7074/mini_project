import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import "./detail.css"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Detail() {
  
  const DummyData = {
    postId: 1,
    username: "서정희",
    title: "초코우유는못참지",
    product:"초코우유",
    store : "gs",
    contents : "뭐라쓸지모르겠는데",
    imageUrl:"이미지url가져와야지",
    CreatedAt: "88-88-8",
    LikeNum : "50"
  };
  
  return (
    <div>
      
      <p/>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='image'>{DummyData.imageUrl}</Item>
        <Item className='itemname'>{DummyData.product}</Item>
      </Stack>
      <p/>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='titledesign'>{DummyData.title}</Item>
        <Item className='postinginfo'>{DummyData.username}</Item>
        <Item className='postinginfo'>{DummyData.CreatedAt}</Item>
        <Item className='postinginfo'>{DummyData.LikeNum}</Item>
        
      </Stack>
      <p/>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className='contents'>{DummyData.contents}</Item>
      </Stack>
    </div>
  );
}


// https://mui.com/material-ui/react-stack/