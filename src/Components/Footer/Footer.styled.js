import styled from '@emotion/styled';

export const Section = styled.footer`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 728px;
    height: 50px;

    padding: 10px;
    margin: 0 auto;

    justify-content: space-between;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const Address = styled.address``;

export const ContactList = styled.ul``;

export const Link = styled.a``;

export const MailItem = styled.li``;

export const SocialItem = styled.li``;
