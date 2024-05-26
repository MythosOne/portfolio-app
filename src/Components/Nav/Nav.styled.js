import styled from '@emotion/styled';

// export const Header = styled.header``;

export const Nav = styled.nav`
  /* position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  padding: 20px;
  border-radius: 50px;
  background-color: rgba(224, 221, 221, 0.5);
  z-index: 1;

  backdrop-filter: blur(50px); */

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    width: max-content;
    /* padding: 20px; */
    border-radius: 50px;
    background-color: rgba(224, 221, 221, 0.5);
    z-index: 1;

    backdrop-filter: blur(50px);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavListItem = styled.li``;

export const NavListItemLink = styled.a``;
