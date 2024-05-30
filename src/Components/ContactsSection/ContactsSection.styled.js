import styled from "@emotion/styled";

export const Section = styled.section`
max-width: 440px;
  width: 100%;

  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  } 

`;

export const Title  = styled.h2``;

export const ContactBLock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;

export const Address = styled.address``;

export const ContactList = styled.ul``;

export const PhoneItem = styled.li``;

export const TitleLine = styled.h3``;

export const Link = styled.a``;

export const MailItem = styled.li``;

export const SocialItem = styled.li``;