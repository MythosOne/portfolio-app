import React from 'react';

import ProjectsList from 'components/ProjectsList/ProjectsList';

import { Section, TitleSection } from './ProjectsSection.styled.js';

function ProjectsSection() {
  return (
    <Section id='projects'>
      <TitleSection>My projects</TitleSection>
      <ProjectsList />
    </Section>
  );
}

export default ProjectsSection;
