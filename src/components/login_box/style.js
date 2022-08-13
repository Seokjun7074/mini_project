import styled from "styled-components";

export const LoginBoxWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const BoxHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  display: flex;
`;

export const LoginHeader = styled.div`
  width: 50%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: ${({ login }) => {
    return login ? "white" : "lightgrey";
  }};
  background-color: ${({ login }) => {
    return login ? "grey" : "white";
  }};
`;
export const SignupHeader = styled(LoginHeader)`
  color: ${({ login }) => {
    return login ? "lightgrey" : "white";
  }};
  background-color: ${({ login }) => {
    return login ? "white" : "grey";
  }};
`;
