//thynk 함수
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookies } from "../../shared/cookies";
import { useNavigate } from "react-router-dom";

export const __login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    try {
      const data = await axios.post(`${API_URL}/user/login`, payload);
      if (data.data === "아이디, 비밀번호를 확인해주세요.") {
        alert("아이디, 비밀번호를 확인해주세요.");
        return;
      } else {
        // 토큰저장
        setCookies("myToken", data.data);
        navigate("/");
      }
      // console.log(data);
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
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const data = await axios.post(`${API_URL}/user/signup`, payload, {
        withcredentials: true,
      });
      console.log("회원가입", data.data);
      alert("회원가입 완료");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
