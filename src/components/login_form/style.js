import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoginInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
`;
