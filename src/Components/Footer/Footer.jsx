import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';

import {
  Section,
  ArrowUpBtn,
  LinkList,
  Item,
  GitLink,
  LinkedinLink,
  TelegramLink,
  Copyright,
} from './Footer.styled.js';

import {
  ArrowUpImg,
  GitImg,
  LinkedinImg,
  TelegramImg,
} from 'assets/icons/IconsComponent';


function Footer() {
  return (
    <Section>
      <Logo />
      <LinkList>
        <Item>
          <GitLink
            href="https://github.com/MythosOne"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitImg />
          </GitLink>
        </Item>
        <Item>
          <LinkedinLink
            href="https://www.linkedin.com/in/victor-avramidi-frontend-developer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinImg />
          </LinkedinLink>
        </Item>
        <Item>
          <TelegramLink
            href="https://t.me/VictorAvramidi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <TelegramImg />
          </TelegramLink>
        </Item>
      </LinkList>
      <Copyright>© 2024 All Rights Reserved Developed with by Mythos</Copyright>
      <ArrowUpBtn href="#about" title="Top of page">
        <ArrowUpImg />
      </ArrowUpBtn>
    </Section>
  );
}

Footer.propTypes = {};

export default Footer;
