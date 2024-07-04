import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-around;

  border-radius: 10px;

  background-color: #f5f4fa;

  padding: 20px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
