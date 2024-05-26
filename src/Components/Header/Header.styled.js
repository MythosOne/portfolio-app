import styled from '@emotion/styled';

export const Section = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1001;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  backdrop-filter: blur(50px);
  
  @media screen and (max-width: 767px) {
    display: none;
    margin: 0;
  }
`;
