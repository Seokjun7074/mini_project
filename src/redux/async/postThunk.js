import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCookies } from "../../shared/cookies";

// `${API_URL}/api/posts`
// 'http://localhost:3000/posts'
// 'https://jsonplaceholder.typicode.com/posts'
export const __getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const data = await axios.get("http://localhost:3001/posts", payload, {
        withcredentials: true,
      });
      //   console.log("받은데이터", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("thunk", error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "post/postPost",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const token = getCookies("myToken");

      const data = await axios.post("http://localhost:3001/posts", payload, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      //   console.log("받은데이터", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("thunk", error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
