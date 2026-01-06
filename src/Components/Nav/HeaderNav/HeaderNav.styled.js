import styled from '@emotion/styled';
import { theme } from 'theme/theme';

const { shadows } = theme;

export const Nav = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavListItem = styled.li`
  width: 80px;
  height: 20px;
`;

export const NavListItemLink = styled.a`
  font-family: 'Roboto Flex';
  font-size: 18px;
  color: #212121;
  font-weight: 500;
  position: relative;

  transition: font-weight 0.25s, color 0.25s, text-shadow 0.25s ease-in-out;

  &:hover,
  &:focus-visible {
    font-weight: 600;
    color: #2196f3;
    text-shadow: ${shadows.hoverShadow};   
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2196f3;
    transform: scaleX(0);
    transition: transform 0.25s ease;
    box-shadow: ${shadows.hoverShadow};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
