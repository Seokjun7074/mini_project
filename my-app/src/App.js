import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";
import MainPage from "./pages/main_page";
import MyPage from "./pages/my_page";


function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
       <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
