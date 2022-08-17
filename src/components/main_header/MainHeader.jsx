import Modal from "../modal/Modal";
import { useState } from "react";
import { HeaderButton, HeaderWrapper, ButtonWrapper } from "./style";
import PostForm from "../post_form/PostForm";
import { Link } from "react-router-dom";

const MainHeader = () => {
  // porp로 detail_page의 게시물 정보, 유저 정보 가져와서 비교 후 버튼 랜더링 여부 결정
  //   const [userCheck, setUserCheck] = useState(false);

  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  return (
    <HeaderWrapper>
    EAT-편한세상
    <ButtonWrapper>
      <HeaderButton onClick={openModal}>추가하기</HeaderButton>
      <Link to={'my-page'}><HeaderButton >마이페이지</HeaderButton></Link>
    </ButtonWrapper>
    <Modal show={show}>
    <PostForm closeModal={closeModal}/>
    </Modal>
  </HeaderWrapper>
  );
};

export default MainHeader;
