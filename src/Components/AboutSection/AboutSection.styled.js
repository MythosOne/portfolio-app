import styled from '@emotion/styled';
import backgroundImage from '../../assets/images/about-background.jpg';

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-size: cover;
  background-color: transparent;

  margin-top: 60px;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;

    align-items: flex-start;
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
  gap: 40px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    align-items: flex-start;

    /* background-image: url(${backgroundImage}); */

    height: 198px;

    background-image: url(${require('../../assets/images/about-background-1440.jpg')});

    background-size: contain;

    background-color: #2196f3;
  }

  @media screen and (min-width: 1279px) {
    height: 345px;

    padding: 20px;

    gap: 100px;
  }
`;

export const AboutItem = styled.li``;

export const Picture = styled.picture``;

export const AboutImage = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid gray;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media screen and (min-width: 1279px) {
    width: 300px;
    height:300px;
  }
`;

export const Description = styled.p`
  text-indent: 1.4em;
  text-align: justify;
  font-size: 14px;
  line-height: 1.4em;

  @media screen and (min-width: 768px) {
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1279px) {
    font-size: 20px;
    line-height: 1.6em;
  }
`;
