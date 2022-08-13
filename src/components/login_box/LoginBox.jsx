import { useState } from "react";
import LoginForm from "../login_form/LoginForm";
import SignupForm from "../signup_form/SignupForm";
import { LoginBoxWrapper, BoxHeader, LoginHeader, SignupHeader } from "./style";
const LoginBox = () => {
  const [login, setLogin] = useState(true);
  const onLogin = () => {
    setLogin(true);
  };
  const onSignup = () => {
    setLogin(false);
  };
  return (
    <LoginBoxWrapper>
      <BoxHeader>
        <LoginHeader onClick={onLogin} login={login}>
          LogIn
        </LoginHeader>
        <SignupHeader onClick={onSignup} login={login}>
          SignUp
        </SignupHeader>
      </BoxHeader>
      {login ? <LoginForm /> : <SignupForm onLogin={onLogin} />}
    </LoginBoxWrapper>
  );
};

export default LoginBox;
