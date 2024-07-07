import React from 'react';
import PropTypes from 'prop-types';

import ResumeButton from './ResumeButton/ResumeButton';

import AboutImg from 'assets/images/about-victor.jpg';

import {
  Section,
  TitleSection,
  AboutList,
  AboutItemImg,
  AboutItemDescription,
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
        <AboutItemImg>
          <BlockColor></BlockColor>
          <Picture>
            <AboutImage src={AboutImg} alt="about image" loading="lazy" />
          </Picture>
        </AboutItemImg>
        <AboutItemDescription>
          <Description>
            I am a developer looking for a full-time job in a development
            campaign that develops interesting projects aimed at improving the
            quality of business and life. I have good knowledge of HTML5, CSS3,
            JavaScript and React technologies. I have experience in applying the
            Scrum methodology when working in a team. Responsible approach to
            the task, aimed at successful implementation. Continuous improvement
            of your professional skills.
          </Description>
        </AboutItemDescription>
      </AboutList>
      <ResumeButton />
    </Section>
  );
}

AboutSection.propTypes = {};

export default AboutSection;
