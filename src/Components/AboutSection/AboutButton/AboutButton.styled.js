import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, shadows, fonts, fontWeights } = theme;

export const BlockBtn = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutBtn = styled.button`

  padding: 3px;

  width: 150px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 16px;

  border-radius: 500px;
  border: 2px solid #2196f3;

  background-color: inherit;

  color: #212121;
  font-family: ${fonts.second};
  font-size: 14px;
  font-style: normal;
  font-weight: ${fontWeights.medium};
  line-height: 14px;

  cursor: pointer;

  transition: all 0.25s ease-in-out;

  > span {
    transition: all 0.25s ease-in-out,;
  }

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    background-color: #2774b2;
    color: #fff;
    box-shadow: ${shadows.hoverShadow};

    > span {
      background-color: #fff;
      stroke: #2196f3;
      border: 1px solid #2196f3;
    }
  }

  @media screen and (${media.tablet}) {
    width: 130px;
    height: 29px;

    padding-left: 6px;

    font-size: 14px;

    bottom: 8px;
    right: 28px;
    border: 1px solid #fff;
    color: #fff;
  }

  @media screen and (${media.desktop}) {
    width: 150px;
    height: 39px;

    font-size: 16px;

    right: 47px;
    bottom: -40px;
  }
`;

export const ButtonImg = styled.span`
  position: absolute;
  right: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #2196f3;
  border: 0;

  stroke: #fff;

  @media screen and (${media.tablet}) {
    width: 24px;
    height: 24px;
  }

  @media screen and (${media.desktop}) {
    width: 32px;
    height: 32px;
  }
`;
