import styled from "@emotion/styled";

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 708px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  } 
`;

export const Title = styled.h2``;

export const TechList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 20px;
`;

export const TechItem = styled.li``;

export const Picture = styled.picture``;

export const Image = styled.img``;