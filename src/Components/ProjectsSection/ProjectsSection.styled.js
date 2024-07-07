import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
const { media, shadows, colors, fonts, fontWeights } = theme;

export const Section = styled.section`
  max-width: 440px;
  width: 100%;
  
  @media screen and (${media.tablet}) {
    max-width: none;
    width: 708px;
  }

  @media screen and (${media.desktop}) {
    width: 1240px;
  }
`;

export const TitleSection = styled.h2`
  font-family: ${fonts.first};
  font-size: 24px;
  font-weight: ${fontWeights.bold};
`;
