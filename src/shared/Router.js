import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail_page/detail";
import MainPage from "../pages/main_page/main_page";
import MyPage from "../pages/my_page/my_page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 라우터경로재확인해서수정하기 */}
        <Route path="/" element={<MainPage />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
