import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, fonts, fontWeights } = theme;

export const BlockBtn = styled.li`
  display: flex;
  justify-content: center;
`;

export const DownloadBtn = styled.button`
  padding: 3px;

  width: 150px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;

  border-radius: 500px;
  border: 2px solid #2196f3;

  background-color: inherit;

  color: #212121;
  font-family: ${fonts.second};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fontWeights.medium};
  line-height: 18px;

  cursor: pointer;

  &:hover {
    background: #2774b2;
    color: #fff;

    transition: all 0.2s ease-in-out;

    > span {
      background: #fff;
      stroke: #2196f3;
      border: 1px solid #2196f3;

      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (${media.tablet}) {
    width: 130px;
    height: 29px;

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
