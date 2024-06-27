// import styled from '@emotion/styled';
import styled from '@emotion/styled/macro';
import { theme } from 'theme/theme';
const { media, shadows, colors, fonts, fontWeights } = theme;

export const DescriptionBlock = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 15px;

  overflow: scroll;

  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: rgba(33, 150, 243, 0.9);
`;

export const CardItem = styled.li`
  overflow: hidden;
  width: 320px;
  height: 430px;

  border: 1px solid #afb1b8;
  border-radius: 10px;

  background-color: #fff;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: ${shadows.hoverShadow};
  }

  &:hover ${DescriptionBlock} {
    transform: translateY(0);
  }

  @media screen and (${media.mobile}) {
    width: 320px;
  }

  @media screen and (${media.desktop}) {
    width: 370px;
  }
`;

export const SiteBlock = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Picture = styled.picture``;

export const Img = styled.img`
  height: 350px;
`;

export const Title = styled.h3`
  font-size: 22px;
  color: #e5e5e5;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: justify;
  text-indent: 20px;
  line-height: normal;
  color: #e5e5e5;
`;

export const StackList = styled.ul`
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 1279px) {
    margin-top: 15px;
  }
`;

export const StackItem = styled.li``;

export const UrlBlock = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export const WebsiteLink = styled.a`
  font-family: ${fonts.first};
  color: #000;
  font-weight: ${fontWeights.extrabold};
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;

  &:hover {
    color: ${colors.accent};
    transition: color 0.2s ease;
  }
`;

export const GitLink = styled.a`
  font-family: ${fonts.first};
  color: #808080;
  font-size: 16px;
  line-height: 1.87;
  font-weight: ${fontWeights.semibold};
  letter-spacing: 0.03em;

  &:hover {
    color: ${colors.accent};
    transition: color 0.2s ease;
  }
`;
