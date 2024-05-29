import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  TitleSection,
  AboutList,
  AboutItem,
  Picture,
  AboutImage,
  Description,
} from './AboutSection.styled.js';

function AboutSection() {
  return (
    <Section id='about'>
      <TitleSection>About me</TitleSection>
      <AboutList>
        <AboutItem>
          <Picture>
            <AboutImage
              width="240"
              height="240"
              alt="about image"
              loading="lazy"
            ></AboutImage>
          </Picture>
        </AboutItem>
        <AboutItem>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            facere esse excepturi dolor voluptatibus aperiam nobis numquam
            officia nostrum quam maxime explicabo perferendis nisi, incidunt
            quibusdam eum. Sapiente, rem voluptatibus.
          </Description>
        </AboutItem>
      </AboutList>
    </Section>
  );
}

AboutSection.propTypes = {};

export default AboutSection;
