//thynk 함수
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCookies } from "react-cookie";

export const __login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
export const __signup = createAsyncThunk(
  "user/signup",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );
      console.log("회원가입", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
