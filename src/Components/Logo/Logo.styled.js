import styled from '@emotion/styled';

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;

  color: #2196f3;
  font-size: 32px;
  font-weight: 600;
`;

export const DevText = styled.p`
  color: #212121;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  background-color: #2196f3;
  height: 24px;

     @media screen and (min-width: 1279px) {
      margin-top: 5px;
  }
`;

export const PortfolioText = styled.span`
  color: #fff;
  font-size: 34px;

    @media screen and (min-width: 1279px) {
      margin-bottom: 4px;
  }
`;
