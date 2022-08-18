import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCookies } from "../../shared/cookies";
import { useNavigate } from "react-router-dom";
// `${API_URL}/api/posts`
// 'http://localhost:3000/posts'
// 'https://jsonplaceholder.typicode.com/posts'

export const __getDetail = createAsyncThunk(
  "detail/getDetail",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const data = await axios.get(`${API_URL}/api/posts/${payload}`, payload, {
        withcredentials: true,
      });
      // console.log("받은데이터", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("thunk", error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

export const __postDetail = createAsyncThunk(
  "detail/postDetail",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const token = getCookies("myToken");
      // console.log(payload);
      const data = await axios.put(
        `${API_URL}/api/posts/${payload.id}`,
        payload.formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("받은데이터", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("thunk", error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
export const __deleteDetail = createAsyncThunk(
  "detail/deleteDetail",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const token = getCookies("myToken");
      // console.log(payload);
      const data = await axios.delete(`${API_URL}/api/posts/${payload}`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("받은데이터", data.data);
      if (data.data === "받은데이터 작성자가 아닙니다.") {
        alert("당신이 쓴 글 아니잖아!");
        return;
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("thunk", error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
