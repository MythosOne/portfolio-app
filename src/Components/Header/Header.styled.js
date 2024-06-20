import styled from '@emotion/styled';

export const Section = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  z-index: 1001;

  box-sizing: border-box;

  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;
  margin: 0 auto;

  backdrop-filter: blur(50px);

  @media screen and (min-width: 768px) {
    width: 728px;
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
