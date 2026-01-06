import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'theme/theme';
const { media, fonts, fontWeights } = theme;

const borderPicture = keyframes`
    0% {
      border-color: #fff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-color: #2196f3;
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-color: #fff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

const borderBlock = keyframes`
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

const fadeIn = keyframes` 
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  position: relative;
  max-width: 440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  background-size: cover;
  background-color: transparent;

  margin-top: 80px;

  @media screen and (${media.tablet}) {
    gap: 0;
    max-width: none;
    width: 708px;

    padding: 0 20px;

    align-items: flex-start;
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

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;

  @media screen and (${media.tablet}) {
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px;
    align-items: flex-start;
    border-radius: 10px;

    height: 265px;

    background-image: url(${require('../../assets/images/about-background-1440.jpg')});

    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    background-color: #2196f3;
  }

  @media screen and (${media.desktop}) {
    height: 345px;

    padding: 20px;

    gap: 100px;
  }
`;

export const AboutItemImg = styled.li`
  /* position: relative; */

  animation: ${fadeIn} 1s ease forwards;
`;

export const BlockColor = styled.div`
  width: 350px;
  height: 360px;
  background: #2196f3;

  @media screen and (${media.tablet}) {
    width: 200px;
    height: 200px;
  }

  @media screen and (${media.desktop}) {
    width: 300px;
    height: 300px;
  }

  animation: ${borderBlock} 16s ease-in-out infinite;

  opacity: 0.85;
`;

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const AboutImage = styled.img`
  /* background-size: cover; */
  width: 340px;
  height: 350px;
  border: 8px solid gray;

  @media screen and (${media.tablet}) {
    width: 200px;
    height: 210px;
  }

  @media screen and (${media.desktop}) {
    width: 300px;
    height: 300px;
  }

  animation: ${borderPicture} 8s ease-in-out infinite;
  opacity: 0.95;
`;

export const AboutItemDescription = styled.li`
  animation: ${fadeIn} 1s ease forwards;
`;

export const Description = styled.p`
  font-family: 'Roboto Flex';
  font-size: 16px;
  line-height: 1.4em;
  text-indent: 1.4em;
  text-align: justify;

  @media screen and (${media.tablet}) {
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media screen and (${media.desktop}) {
    font-size: 22px;
    line-height: 1.6em;
  }
`;

export const ContainerBtn = styled.ul`
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media screen and (${media.tablet}) {
    position: absolute;
    right: 30px;
    bottom: 10px;
  }

  @media screen and (${media.desktop}) {
    right: 40px;
  }
`;
