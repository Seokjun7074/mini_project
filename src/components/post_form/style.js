import styled from "styled-components";

export const PostFormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  width: 300px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: red; */
`;
export const TextInput = styled.input`
  background-color: whitesmoke;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid grey;
`;
export const PostImageBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: grey;
  border-radius: 10px;
  overflow: hidden;
`;
export const PostImagePreview = styled.img`
  width: 350px;
  height: 350px;
  object-fit: scale-down;
`;

export const PostButton = styled.button`
  height: 30px;
  margin-top: 8px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
`;
