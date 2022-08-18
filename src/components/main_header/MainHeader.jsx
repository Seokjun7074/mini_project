import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import {
  HeaderButton,
  HeaderWrapper,
  LoginWrapper,
  LogoutWrapper,
} from "./style";
import PostForm from "../post_form/PostForm";
import { Link } from "react-router-dom";
import { getCookies, removeCookies } from "../../shared/cookies";

const MainHeader = () => {
  // porp로 detail_page의 게시물 정보, 유저 정보 가져와서 비교 후 버튼 랜더링 여부 결정
  //   const [userCheck, setUserCheck] = useState(false);

  const [show, setShow] = useState(false);
  const [token, setToken] = useState();
  useEffect(() => {
    const myToken = getCookies("myToken");
    setToken(myToken);
  }, []);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const logout = () => {
    removeCookies("myToken");
    window.location.reload();
  };

  return (
    <HeaderWrapper>
      EAT-편한세상
      <LoginWrapper token={token}>
        <HeaderButton onClick={openModal}>추가하기</HeaderButton>
        <Link to={"my-page"}>
          <HeaderButton>마이페이지</HeaderButton>
        </Link>
        <HeaderButton onClick={logout}>로그아웃</HeaderButton>
      </LoginWrapper>
      <LogoutWrapper token={token}>
        <Link to={"login"}>
          <HeaderButton>로그인</HeaderButton>
        </Link>
      </LogoutWrapper>
      <Modal show={show}>
        <PostForm closeModal={closeModal} />
      </Modal>
    </HeaderWrapper>
  );
};

export default MainHeader;
