import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 480px) {
    margin: 0;
  }
`;
