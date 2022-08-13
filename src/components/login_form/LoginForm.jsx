import useInput from "../../hooks/useInput";
import {
  LoginFormWrapper,
  LoginInput,
  LoginInputWrapper,
  SubmitButton,
} from "./style";

const LoginForm = () => {
  const [username, usernameHandler] = useInput();
  const [password, passwordHandler] = useInput();

  const submitForm = {
    username: username,
    password: password,
  };
  const onSubmit = () => {
    if (username === "" || password === "") {
      alert("양식에 맞게 작성해주세요");
      return;
    }
    console.log(submitForm); // axios post
  };
  return (
    <LoginFormWrapper>
      <LoginInputWrapper>
        <label>ID </label>
        <LoginInput
          type="text"
          value={username}
          onChange={usernameHandler}
          // placeholder=" ID를 입력하세요"
        />
        <label>password </label>
        <LoginInput
          type="password"
          value={password}
          onChange={passwordHandler}
          // placeholder=" password를 입력하세요"
        />
      </LoginInputWrapper>
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </LoginFormWrapper>
  );
};

export default LoginForm;

// {
//     username: "testid",
//     password: "123aaa"
// }
