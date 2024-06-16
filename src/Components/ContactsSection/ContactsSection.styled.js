import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;

    margin-bottom: 0;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const Title = styled.h2``;

export const ContactBLock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
`;

// export const Address = styled.address``;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PhoneItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleLine = styled.h3`
font-size: 18px;
`;

export const Link = styled.a`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  color: #212121;

  text-align: justify;
  /* font-family: Fira Sans; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-decoration: none;

  stroke: #212121;

  &:hover {
    stroke: #2196f3;

    transition: stroke 0.2s ease-in-out;
  }

  @media screen and (min-width: 1279px) {
    font-size: 24px;
  }
`;

export const MailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NetworkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const LinkedinItem = styled.li``;

export const TelegramItem = styled.li``;

export const LinkedinLink = styled.a`
  stroke: #212121;
  fill: #212121;

  &:hover {
    stroke: #2196f3;
    fill: #2196f3;

    transition: all 0.2s ease-in-out;
  }
`;

export const TelegramLink = styled.a`
  stroke: #212121;
  fill: #212121;

  &:hover {
    stroke: #2196f3;
    fill: #2196f3;

    transition: all 0.2s ease-in-out;
  }
`;
