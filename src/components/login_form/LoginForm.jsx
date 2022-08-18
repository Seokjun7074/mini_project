import useInput from "../../hooks/useInput";
import {
  LoginFormWrapper,
  LoginInput,
  LoginInputWrapper,
  SubmitButton,
} from "./style";
import { useDispatch } from "react-redux";
import { __login } from "../../redux/async/userThunk";

const LoginForm = () => {
  const dispatch = useDispatch();
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
    } else {
      dispatch(__login(submitForm));
    }
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
