import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  ContactBLock,
  // Address,
  ContactList,
  PhoneItem,
  TitleLine,
  Link,
  MailItem,
  SocialItem,
  NetworkList,
  LinkedinItem,
  TelegramItem,
  LinkedinLink,
  TelegramLink,
} from './ContactsSection.styled.js';

import { ContactForm } from './ContactForm/ContactForm.jsx';
import {
  PhoneImg,
  EmailImg,
  LinkedinImgContact,
  TelegramImgContact,
} from '../../assets/icons/IconsComponent.jsx';

function ContactsSection() {
  return (
    <Section id="contacts">
      <Title>Contact me</Title>
      <ContactBLock>
        <ContactList>
          <PhoneItem>
            <TitleLine>Phone:</TitleLine>
            <Link href="tel:+380979835601">
              <PhoneImg /> 38 (097) 98 35 601
            </Link>
          </PhoneItem>
          <MailItem>
            <TitleLine>E-mail:</TitleLine>
            <Link href="mailto: victor.avramidi@gmail.com">
              <EmailImg />
              victor.avramidi@gmail.com
            </Link>
          </MailItem>
          <SocialItem>
            <TitleLine>Social Networks:</TitleLine>
            <NetworkList>
              <LinkedinItem>
                <LinkedinLink
                  href="https://www.linkedin.com/in/victor-avramidi-frontend-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <LinkedinImgContact />
                </LinkedinLink>
              </LinkedinItem>
              <TelegramItem>
                <TelegramLink
                  href="https://t.me/VictorAvramidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <TelegramImgContact />
                </TelegramLink>
              </TelegramItem>
            </NetworkList>
          </SocialItem>
        </ContactList>
        <ContactForm />
      </ContactBLock>
    </Section>
  );
}

ContactsSection.propTypes = {};

export default ContactsSection;
