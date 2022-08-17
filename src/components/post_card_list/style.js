import styled from "styled-components";

export const PostPaginationWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, auto));
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const PostCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
