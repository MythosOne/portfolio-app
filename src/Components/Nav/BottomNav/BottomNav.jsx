import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import navData from 'data/nav-data';

import {
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
            <BottomNavigationAction
              sx={BottomNavigationActionStyle}
              key={menu.id}
              label={menu.nameItem}
              value={menu.linkItem}
              icon={menu.icon}
              href={`#${menu.linkItem}`}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}

BottomNav.propTypes = {};

export default BottomNav;
