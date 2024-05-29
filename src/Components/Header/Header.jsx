import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import HeaderNav from '../Nav/HeaderNav/HeaderNav';
import { Section } from './Header.styled';

function Header() {
  return (
    <Section>
      <Logo />
      <HeaderNav />
    </Section>
  );
}

Header.propTypes = {};

export default Header;
