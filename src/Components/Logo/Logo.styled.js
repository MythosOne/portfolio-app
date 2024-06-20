import styled from '@emotion/styled';

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 28px;

  color: #2196f3;
  font-size: 28px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    /* &:hover {
      > div {
        background-color: #fff;
        transition: background-color 0.2s ease-in-out;
      }
///!!! Doesn't work style span
      > span {
        color: #2196f3;
        transition: color 0.2s ease-in-out;
      }
    } */
  }
`;

export const DevText = styled.p`
  color: #212121;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  background-color: #2196f3;
  height: 22px;
  /* margin-top: 2px; */

  @media screen and (min-width: 768px) {
    height: 18px;
  }
`;

export const PortfolioText = styled.span`
  color: #fff;
  font-size: 28px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
