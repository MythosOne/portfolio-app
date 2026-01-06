import React from 'react';

import resume from 'assets/resume/victor_avramidi_resume.pdf';
import certificate from 'assets/resume/victor_avramidi_certificate.pdf';

import { ResumeBtnImg } from 'assets/icons/IconsComponent';
import { CertificateBtnImg } from 'assets/icons/IconsComponent';
import AboutButton from './AboutButton/AboutButton';

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
  ContainerBtn,
} from './AboutSection.styled.js';

function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'victor_avramidi_resume.pdf';
    document.body.appendChild(link);
    link.click();
  };

  const handleViewCertificate = () => {
    window.open(certificate, '_blank');
  };

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
      <ContainerBtn>
        <AboutButton
          onClick={handleDownloadResume}
          type={'button'}
          title={'Download CV'}
          btnText={'Download CV'}
          IconComponent={ResumeBtnImg}
          width={'16'}
          height={'16'}
        />
        <AboutButton
          onClick={handleViewCertificate}
          type={'button'}
          title={'View Certificate'}
          btnText={'Certificate'}
          IconComponent={CertificateBtnImg}
          width={'24'}
          height={'24'}
        />
      </ContainerBtn>
    </Section>
  );
}

export default AboutSection;
