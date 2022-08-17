import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: 20px;
`;
export const LoginWrapper = styled.div`
  display: flex;
  gap: 20px;
  display: ${(props) => (props.token ? null : "none")};
`;
export const LogoutWrapper = styled.div`
  display: flex;
  gap: 20px;
  display: ${(props) => (props.token ? "none" : null)};
`;

export const HeaderButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 75px;
  height: 35px;
  background-color: whitesmoke;
  font-size: 20px;
  font-weight: 600;
  /* display: ${(props) => (props.token ? null : "none")}; */
`;

// export const LoginButton = styled(HeaderButton)`
//   display: ${(props) => (props.token ? "none" : null)};
// `;
