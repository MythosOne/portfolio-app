import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import navData from 'data/nav-data';
import PropTypes from 'prop-types';

import {
  // Nav,
  // NavList,
  NavListItem,
  NavListItemLink,
  bottomNavigationStyle,
} from './BottomNav.styled';

function BottomNav() {
  const menuItems = navData;

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Nav> */}
      <BottomNavigation
        sx={bottomNavigationStyle}
        value={value}
        onChange={handleChange}
      >
        {menuItems.map(menu => {
          return (
            <NavListItem key={menu.id}>
              <NavListItemLink href={`#${menu.linkItem}`}>
                <BottomNavigationAction
                  label={menu.nameItem}
                  value={menu.nameItem}
                  icon={menu.icon}
                />
              </NavListItemLink>
            </NavListItem>
          );
        })}
      </BottomNavigation>
      {/* </Nav> */}
    </>
  );
}

BottomNav.propTypes = {};

export default BottomNav;
