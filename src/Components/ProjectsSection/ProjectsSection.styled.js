import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;
  /* width: 100%; */

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const TitleSection = styled.h2``;
