// import styled from '@emotion/styled';
import styled from '@emotion/styled/macro';

export const DescriptionBlock = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 10px;

  /* overflow: scroll; */

  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: rgba(33, 150, 243, 0.9);
`;

export const CardItem = styled.li`
  width: 320px;
  height: 430px;

  border: 1px solid gray;
  border-radius: 4px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &:hover ${DescriptionBlock} {
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1279px) {
    width: 370px;
  }
`;

export const SiteBlock = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 320px;
`;

export const Title = styled.h3``;

export const Text = styled.p``;

export const Stack = styled.span``;

export const UrlBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 10px;
`;

export const WebsiteLink = styled.a``;

export const GitLink = styled.a``;
