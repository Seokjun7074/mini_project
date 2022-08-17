//thynk 함수
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const __login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
