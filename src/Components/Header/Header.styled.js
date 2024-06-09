import styled from '@emotion/styled';

export const Section = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1001;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 0 auto;

  backdrop-filter: blur(50px);

  @media screen and (min-width: 768px) {
    width: 728px;
    height: 40px;
    justify-content: space-between;
    background-color: #fff;

    border-bottom: 2px solid transparent;
    border-image: radial-gradient(circle, #2196f3, transparent) 1 0%
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
    height: 60px;
  }
`;
