import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-image: url('assets/images/about-background.jpg');
  background-size: cover;
  background-color: transparent;

  /* @media screen and (max-width: 480px) {
    !!! mobile-responsive 
  }*/

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const TitleSection = styled.h2``;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutItem = styled.li``;

export const Picture = styled.picture``;

export const AboutImage = styled.img`
  /* display: block;
  max-width: 100%;
  height: auto; */
  border: 1px solid gray;
`;

export const Description = styled.p`
  text-align: justify;
`;
