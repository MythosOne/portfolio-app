import React from 'react';
import navData from 'data/nav-data';
import PropTypes from 'prop-types';

import { Nav, NavList, NavListItem, NavListItemLink } from './HeaderNav.styled';

function HeaderNav() {
  const menuItems = navData;

  return (
    <>
      <Nav>
        <NavList>
          {menuItems.map(menu => {
            if (menu.id > 1) {
              return (
                <NavListItem key={menu.id}>
                  <NavListItemLink href={`#${menu.linkItem}`}>
                    {menu.nameItem}
                  </NavListItemLink>
                </NavListItem>
              );
            } else {
              return null;
            }
          })}
        </NavList>
      </Nav>
    </>
  );
}

HeaderNav.propTypes = {};

export default HeaderNav;
