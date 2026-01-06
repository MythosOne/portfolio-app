import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, fonts, fontWeights } = theme;

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

export const Title = styled.h2`
  font-family: ${fonts.first};
  font-size: 24px;
  font-weight: ${fontWeights.bold};
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;

  margin-top: 20px;
`;

export const TechItem = styled.li``;

export const Picture = styled.picture``;

export const Image = styled.img``;
