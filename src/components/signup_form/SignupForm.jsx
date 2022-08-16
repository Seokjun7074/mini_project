import { useEffect, useRef } from "react";
import useInput from "../../hooks/useInput";
import { LoginInputWrapper, SubmitButton } from "../login_form/style";
import { LabelBox, SignupFormWrapper, SignupInput, ValidText } from "./style";
import { __signup } from "../../redux/async/userThunk";
import { useDispatch } from "react-redux";

const SignupForm = ({ onLogin }) => {
  const dispatch = useDispatch();
  const [username, usernameHandler, setUsername] = useInput();
  const [password, passwordHandler, setPassword] = useInput();
  const [passwordCheck, passwordCheckHandler, setPasswordCheck] = useInput();
  const refId = useRef(0);
  const refPassword = useRef(0);
  const submitForm = {
    username: username,
    password: password,
    passwordCheck: passwordCheck,
  };
  const onSubmit = () => {
    if (password === "" || passwordCheck === "" || idCheck === false) {
      alert("양식에 맞게 작성해주세요");
      refId.current.focus();
      return;
    } else if (password !== passwordCheck) {
      alert("비밀번호가 다릅니다.");
      refPassword.current.focus();
    } else {
      dispatch(__signup(submitForm));
      alert("회원가입 완료");
      onLogin(true);
    }
  };

  const idValidation = /^[A-Za-z0-9]{5,10}$/;
  const idCheck = idValidation.test(username);
  useEffect(() => {
    // console.log(idCheck);
  }, [username]);

  return (
    <SignupFormWrapper>
      <LoginInputWrapper>
        <LabelBox>
          <label>ID</label>
          <ValidText valid={idCheck}>영문 5글자~10글자로 입력하세요</ValidText>
        </LabelBox>
        <SignupInput
          type="text"
          value={username}
          onChange={usernameHandler}
          placeholder=" 영문 5글자~10글자"
          valid={idCheck}
          ref={refId}
        />
        <label>password </label>
        <SignupInput
          type="password"
          value={password}
          onChange={passwordHandler}
          placeholder=" password를 입력하세요"
          ref={refPassword}
        />
        <label>password Check </label>
        <SignupInput
          type="password"
          value={passwordCheck}
          onChange={passwordCheckHandler}
          placeholder=" password를 확인하세요"
        />
      </LoginInputWrapper>
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </SignupFormWrapper>
  );
};

export default SignupForm;

// 아이디: 영문 5글자~10글자
// 비밀번호: 영문+숫자

// {
//     username: "testid”,
//     password: "123aaa",
//     passwordCheck: "123aaa"
// }
