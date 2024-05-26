import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  ContactBLock,
  Address,
  ContactList,
  PhoneItem,
  TitleLine,
  Link,
  MailItem,
  SocialItem,
} from './ContactsSection.styled.js';

import { ContactForm } from './ContactForm/ContactForm.jsx';

function ContactsSection() {
  return (
    <Section>
      <Title>Contact me</Title>
      <ContactBLock>
        <Address>
          <ContactList>
            <PhoneItem>
              <TitleLine>Phone:</TitleLine>
              <Link href="">13456</Link>
            </PhoneItem>
            <MailItem>
              <TitleLine>E-mail:</TitleLine>
              <Link href="">123@mail</Link>
            </MailItem>
            <SocialItem>
              <TitleLine>Social Networks:</TitleLine>
              <Link href=""></Link>
            </SocialItem>
          </ContactList>
        </Address>
        <ContactForm />
      </ContactBLock>
    </Section>
  );
}

ContactsSection.propTypes = {};

export default ContactsSection;
