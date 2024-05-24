import React from 'react';
import PropTypes from 'prop-types'

import Logo from '../Logo/Logo';

import {Section, Address, ContactList, MailItem, Link, SocialItem } from './Footer.styled.js';

function Footer() {
  return (
    <Section>
      <Logo/>
      <Address>
        <ContactList>
          <MailItem>
            <Link href="">123@mail</Link>
          </MailItem>
          <SocialItem>
            <Link href=""></Link>
          </SocialItem>
        </ContactList>
      </Address>
    </Section>
  );
}

Footer.propTypes = {};

export default Footer;
