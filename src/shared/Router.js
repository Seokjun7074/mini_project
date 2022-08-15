import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail_page/detail"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 라우터경로재확인해서수정하기 */}
      
      <Route path="detail" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;