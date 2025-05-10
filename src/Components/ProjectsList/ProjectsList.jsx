import React from 'react';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import projectsData from 'data/projects-data';

import { CardList } from './ProjectsList.styled';

function ProjectsList() {
  return (
    <CardList>
      {projectsData.map(project => {
        return <ProjectCard key={project.id} data={project} />;
      })}
    </CardList>
  );
}

export default ProjectsList;
