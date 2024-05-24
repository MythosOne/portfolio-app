import React from 'react';
import PropTypes from 'prop-types';

import { Nav, NavList, NavListItem, NavListItemLink } from './HeaderNav.styled';

function HeaderNav() {
  const menuItems = [
    { id: 1, nameItem: 'About', linkItem: '/about' },
    { id: 2, nameItem: 'Projects', linkItem: '/projects' },
    { id: 3, nameItem: 'Contacts', linkItem: '/contacts' },
  ];

  return (
    <>
      <Nav>
        <NavList>
          {menuItems.map(menu => {
            return (
              <NavListItem key={menu.id}>
                <NavListItemLink href={menu.linkItem}>
                  {menu.nameItem}
                </NavListItemLink>
              </NavListItem>
            );
          })}
        </NavList>
      </Nav>
    </>
  );
}

HeaderNav.propTypes = {};

export default HeaderNav;
