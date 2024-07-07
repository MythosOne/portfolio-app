import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, shadows, colors, fonts, fontWeights } = theme;

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

     @media screen and (${media.desktop}) {
      margin-top: 5px;
  }
`;

export const PortfolioText = styled.span`
  color: #fff;
  font-size: 34px;

    @media screen and (${media.desktop}) {
      margin-bottom: 4px;
  }
`;
