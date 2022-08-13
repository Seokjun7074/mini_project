import { useState } from "react";
import { HeaderButton, HeaderWrapper, ButtonWrapper } from "./style";

const Header = () => {
  // porp로 detail_page의 게시물 정보, 유저 정보 가져와서 비교 후 버튼 랜더링 여부 결정
  //   const [userCheck, setUserCheck] = useState(false);
  return (
    <HeaderWrapper>
      EAT-편한세상
      {/* <ButtonWrapper>
        <HeaderButton>수정</HeaderButton>
        <HeaderButton>삭제</HeaderButton>
      </ButtonWrapper> */}
    </HeaderWrapper>
  );
};

export default Header;
