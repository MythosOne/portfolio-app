import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  TechList,
  TechItem,
  Picture,
  Image,
} from './TechStackSection.styled';

function TechStackSection() {
  return (
    <Section>
      <Title>Tech Stack</Title>
      <TechList>
        <TechItem>
          <Picture>
            <Image
              width="60"
              height="60"
              alt="HTML5 image"
              loading="lazy"
            ></Image>
          </Picture>
        </TechItem>
        <TechItem>
          <Picture>
            <Image
              width="60"
              height="60"
              alt="CSS3 image"
              loading="lazy"
            ></Image>
          </Picture>
        </TechItem>
        <TechItem>
          <Picture>
            <Image
              width="60"
              height="60"
              alt="JavaScript image"
              loading="lazy"
            ></Image>
          </Picture>
        </TechItem>
        <TechItem>
          <Picture>
            <Image
              width="60"
              height="60"
              alt="React image"
              loading="lazy"
            ></Image>
          </Picture>
        </TechItem>
      </TechList>
    </Section>
  );
}

export default TechStackSection;
