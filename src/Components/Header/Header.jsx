import React from 'react';

import Logo from '../Logo/Logo';
import HeaderNav from '../Nav/HeaderNav/HeaderNav';
import { Section } from './Header.styled';

function Header() {
  return (
    <Section id="header">
      <Logo />
      <HeaderNav />
    </Section>
  );
}

export default Header;
