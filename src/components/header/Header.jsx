import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../../shared/cookies";
import {
  HeaderButton,
  HeaderWrapper,
  LoginWrapper,
  LogoutWrapper,
} from "./style";

const Header = () => {
  // porp로 detail_page의 게시물 정보, 유저 정보 가져와서 비교 후 버튼 랜더링 여부 결정
  //   const [userCheck, setUserCheck] = useState(false);
  const [token, setToken] = useState();
  const navigete = useNavigate();
  useEffect(() => {
    const myToken = getCookies("myToken");
    setToken(myToken);
  }, []);
  console.log(token);

  return (
    <HeaderWrapper>
      EAT-편한세상
      <LoginWrapper token={token}>
        <HeaderButton>수정</HeaderButton>
        <HeaderButton>삭제</HeaderButton>
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
