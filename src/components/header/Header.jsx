import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../../shared/cookies";
import {
  HeaderButton,
  HeaderWrapper,
  LoginWrapper,
  LogoutWrapper,
  ButtonWrapper, //츄가함
} from "./style";
import EditForm from "../edit_form/EditForm";
import { useDispatch, useSelector } from "react-redux";
import { __deleteDetail } from "../../redux/async/detailThunk";

const Header = () => {
  // porp로 detail_page의 게시물 정보, 유저 정보 가져와서 비교 후 버튼 랜더링 여부 결정
  //   const [userCheck, setUserCheck] = useState(false);
  const [token, setToken] = useState();
  const navigete = useNavigate();
  useEffect(() => {
    const myToken = getCookies("myToken");
    setToken(myToken);
  }, []);
  // console.log("token:", token);

  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  const data = useSelector((state) => state.detail.detail);
  const dispatch = useDispatch();
  const deleteDetail = async () => {
    await dispatch(__deleteDetail(data.post_id));
    navigete("/");
  };

  return (
    <HeaderWrapper>
      EAT-편한세상
      <Modal show={show}>
        <EditForm data={data} closeModal={closeModal} />
      </Modal>
      <LoginWrapper token={token}>
        <HeaderButton onClick={openModal}>수정</HeaderButton>
        <HeaderButton onClick={deleteDetail}>삭제</HeaderButton>
      </LoginWrapper>
      <LogoutWrapper token={token}>
        <HeaderButton
          onClick={() => {
            navigete("/login");
          }}
        >
          로그인
        </HeaderButton>
      </LogoutWrapper>
    </HeaderWrapper>
  );
};

export default Header;
