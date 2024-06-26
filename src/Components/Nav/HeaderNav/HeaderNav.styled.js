import styled from '@emotion/styled';

// export const Header = styled.header``;

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

  &:hover {
    font-weight: 600;
    /* color: #0074d9;  */
    color: #2196f3;
    transition: font-size 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    /* background-color: #0074d9; */
    background-color: #2196f3;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
