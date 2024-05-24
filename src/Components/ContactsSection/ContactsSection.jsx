import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  Address,
  ContactList,
  PhoneItem,
  TitleLine,
  Link,
  MailItem,
  SocialItem,
} from './ContactsSection.styled.js';

function ContactsSection() {
  return (
    <Section>
      <Title>Contact me</Title>
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
    </Section>
  );
}

ContactsSection.propTypes = {};

export default ContactsSection;
