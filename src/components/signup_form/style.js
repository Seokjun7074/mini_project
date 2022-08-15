import styled from "styled-components";
import { LoginFormWrapper, LoginInput } from "../login_form/style";

export const SignupFormWrapper = styled(LoginFormWrapper)``;

export const SignupInput = styled(LoginInput)`
  &:focus {
    outline: ${(props) => {
      if (props.valid === undefined) return "null";
      return props.valid ? "2px solid #3ccd7b" : "2px solid tomato";
    }};
    /* outline: none; */
    /* box-shadow: 0px 0px 2px #3ccd7b; */
  }
`;

export const LabelBox = styled.div`
  padding-right: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ValidText = styled.label`
  font-size: 12px;
  display: ${(props) => {
    return props.valid ? "none" : "flex";
  }};
  color: ${(props) => {
    // if (props.valid === undefined) return "null";
    console.log(props.valid);
    return props.valid ? "tomato" : "tomato";
  }};
`;
