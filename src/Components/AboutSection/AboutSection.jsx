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
    <Section id="about">
      <TitleSection>About me</TitleSection>
      <AboutList>
        <AboutItem>
          <Picture>
            <AboutImage
              // width="180"
              // height="180"
              alt="about image"
              loading="lazy"
            ></AboutImage>
          </Picture>
        </AboutItem>
        <AboutItem>
          <Description>
          I am a developer looking for a full-time job in a development campaign that develops interesting projects aimed at improving the quality of business and life. I have good knowledge of HTML5, CSS3, JavaScript and React technologies. I have experience in applying the Scrum methodology when working in a team. Responsible approach to the task, aimed at successful implementation. Continuous improvement of your professional skills.
          </Description>
        </AboutItem>
      </AboutList>
    </Section>
  );
}

AboutSection.propTypes = {};

export default AboutSection;
