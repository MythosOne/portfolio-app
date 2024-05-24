import React from 'react';
import PropTypes from 'prop-types';
import ProjectsList from 'components/ProjectsList/ProjectsList';

import { Section, TitleSection } from './ProjectsSection.styled.js';

function ProjectsSection() {
  return (
    <Section>
      <TitleSection>My projects</TitleSection>
      <ProjectsList />
    </Section>
  );
}

ProjectsSection.propTypes = {};

export default ProjectsSection;
