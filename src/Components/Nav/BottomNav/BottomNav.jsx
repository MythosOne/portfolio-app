import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import navData from 'data/nav-data';
import PropTypes from 'prop-types';

import {
  NavListItem,
  NavListItemLink,
  bottomNavigationStyle,
  BottomNavigationActionStyle,
} from './BottomNav.styled';

function BottomNav() {
  const menuItems = navData;

  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation
        sx={bottomNavigationStyle}
        value={value}
        onChange={handleChange}
      >
        {menuItems.map(menu => {
          return (
            // <NavListItem key={menu.id}>
            //   <NavListItemLink href={`#${menu.linkItem}`}>
            <BottomNavigationAction
              sx={BottomNavigationActionStyle}
              key={menu.id}
              label={menu.nameItem}
              value={menu.linkItem}
              icon={menu.icon}
              href={`#${menu.linkItem}`}
            />
            //   </NavListItemLink>
            // </NavListItem>
          );
        })}
      </BottomNavigation>
    </>
  );
}

BottomNav.propTypes = {};

export default BottomNav;
