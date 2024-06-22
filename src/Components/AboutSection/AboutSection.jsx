import React from 'react';
import PropTypes from 'prop-types';

import AboutImg from '../../assets/images/about-victor.jpg';

import {
  Section,
  TitleSection,
  AboutList,
  AboutItem,
  BlockColor,
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
          <BlockColor></BlockColor>
          <Picture>
            <AboutImage src={AboutImg} alt="about image" loading="lazy" />
          </Picture>
        </AboutItem>
        <AboutItem>
          <Description>
            I am a developer looking for a full-time job in a development
            campaign that develops interesting projects aimed at improving the
            quality of business and life. I have good knowledge of HTML5, CSS3,
            JavaScript and React technologies. I have experience in applying the
            Scrum methodology when working in a team. Responsible approach to
            the task, aimed at successful implementation. Continuous improvement
            of your professional skills.
          </Description>
        </AboutItem>
      </AboutList>
    </Section>
  );
}

AboutSection.propTypes = {};

export default AboutSection;
