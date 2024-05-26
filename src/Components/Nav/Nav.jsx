import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PropTypes from 'prop-types';

import { Nav, NavList, NavListItem, NavListItemLink } from './Nav.styled';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

function Navigation() {
  const menuItems = [
    { id: 1, nameItem: 'Home', linkItem: '/home', icon: <HomeOutlinedIcon /> },
    {
      id: 2,
      nameItem: 'About',
      linkItem: '/about',
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      id: 3,
      nameItem: 'Projects',
      linkItem: '/projects',
      icon: <FolderOutlinedIcon />,
    },
    {
      id: 4,
      nameItem: 'Contacts',
      linkItem: '/contacts',
      icon: <ContactsOutlinedIcon />,
    },
  ];
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Nav> */}
      <BottomNavigation
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'max-content',
          borderRadius: '50px',
          backgroundColor: 'rgba(224, 221, 221, 0.5)',
          zIndex: '1',
          backdropFilter: 'blur(50px)',
        }}
        value={value}
        onChange={handleChange}
      >
        {menuItems.map(menu => {
          return (
            <NavListItem key={menu.id}>
              <NavListItemLink href={menu.linkItem}>
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

Nav.propTypes = {};

export default Navigation;
