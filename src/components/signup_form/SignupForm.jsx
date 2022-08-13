import useInput from "../../hooks/useInput";
import {
  LoginInput,
  LoginInputWrapper,
  SubmitButton,
} from "../login_form/style";
import { SignupFormWrapper } from "./style";

const SignupForm = ({ onLogin }) => {
  const [username, usernameHandler, setUsername] = useInput();
  const [password, passwordHandler, setPassword] = useInput();
  const [passwordCheck, passwordCheckHandler, setPasswordCheck] = useInput();
  const submitForm = {
    username: username,
    password: password,
    passwordCheck: passwordCheck,
  };
  const onSubmit = () => {
    if (username === "" || password === "" || passwordCheck === "") {
      alert("양식에 맞게 작성해주세요");
      return;
    }
    console.log(submitForm); // axios post
    alert("회원가입 완료");
    onLogin(true);
  };
  // const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
  // console.log(userIdRegex.test(username));
  return (
    <SignupFormWrapper>
      <LoginInputWrapper>
        <label>ID</label>
        <LoginInput
          type="text"
          value={username}
          onChange={usernameHandler}
          placeholder=" 영문 5글자~10글자"
        />
        <label>password </label>
        <LoginInput
          type="password"
          value={password}
          onChange={passwordHandler}
          placeholder=" password를 입력하세요"
        />
        <label>password Check </label>
        <LoginInput
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
