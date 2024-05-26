import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import Navigation from '../Nav/Nav';

import { Section } from './Header.styled';

function Header() {
  return (
    <Section>
      <Logo />
      <Navigation />
    </Section>
  );
}

Header.propTypes = {};

export default Header;
