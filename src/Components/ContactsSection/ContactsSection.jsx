import React from 'react';

import {
  Section,
  Title,
  ContactBLock,
  ContactList,
  PhoneItem,
  TitleLine,
  Link,
  MailItem,
  SocialItem,
  NetworkList,
  LinkedinItem,
  TelegramItem,
  ViberItem,
  WhatsAppItem,
  LinkedinLink,
  TelegramLink,
  ViberLink,
  WhatsAppLink,
} from './ContactsSection.styled.js';

import { ContactForm } from './ContactForm/ContactForm.jsx';
import {
  PhoneImg,
  EmailImg,
  LinkedinContactImg,
  TelegramContactImg,
  ViberContactImg,
  WhatsAppContactImg,
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
                  <LinkedinContactImg />
                </LinkedinLink>
              </LinkedinItem>
              <TelegramItem>
                <TelegramLink
                  href="https://t.me/VictorAvramidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <TelegramContactImg />
                </TelegramLink>
              </TelegramItem>
              <ViberItem>
                <ViberLink
                  href="viber://chat?number=%2B380979835601"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <ViberContactImg />
                </ViberLink>
              </ViberItem>
              <WhatsAppItem>
                <WhatsAppLink
                  href="https://wa.me/380979835601"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <WhatsAppContactImg />
                </WhatsAppLink>
              </WhatsAppItem>
            </NetworkList>
          </SocialItem>
        </ContactList>
        <ContactForm />
      </ContactBLock>
    </Section>
  );
}

export default ContactsSection;
