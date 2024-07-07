import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, fonts, fontWeights} = theme;

export const Section = styled.footer`
  display: none;

  @media screen and (${media.tablet}) {
    width: 728px;
    margin: 40px auto 0;

    backdrop-filter: none;

    display: grid;
    grid-template-areas:
      'logo linkList arrowUp '
      'logo copyright arrowUp';

    gap: 10px;
    padding: 10px 20px;

    border-top: 2px solid transparent;
    border-image: radial-gradient(circle, #2196f3, transparent) 1 0%;
  }

  @media screen and (${media.desktop}) {
    width: 1240px;
  }
`;

export const ArrowUpBtn = styled.a`
  grid-area: arrowUp;

  justify-self: end;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background: #2196f3;
  border: 0;

  stroke: #fff;

  &:hover {
    stroke: #2196f3;
    background: #fff;
    border: 1px solid #2196f3;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (${media.tablet}) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkList = styled.ul`
  grid-area: linkList;

  list-style: none;
  display: flex;
  gap: 10px;

  justify-content: center;
  align-items: center;
`;

export const Item = styled.li``;

export const GitLink = styled.a`
  fill: #2196f3;

  &:hover ellipse {
    fill: #2196f3;
    transition: fill 0.2s ease-in-out;
  }

  &:hover path {
    fill: #fff;

    transition: fill 0.2s ease-in-out;
  }
`;

export const LinkedinLink = styled.a`
  fill: #fff;

  &:hover ellipse {
    fill: #fff;

    transition: fill 0.2s ease-in-out;
  }

  &:hover path {
    fill: #2196f3;

    transition: fill 0.2s ease-in-out;
  }
`;

export const TelegramLink = styled.a`
  fill: #2196f3;

  &:hover ellipse {
    fill: #fff;

    transition: fill 0.2s ease-in-out;
  }

  &:hover path {
    fill: #2196f3;

    transition: fill 0.2s ease-in-out;
  }
`;

export const Copyright = styled.span`
  grid-area: copyright;
  text-align: center;

  font-family: ${fonts.second};
  font-size: 12px;
  font-style: normal;
  font-weight: ${fontWeights.regular};
  line-height: 1.15;

  color: #212121;

  margin: 0;
`;
