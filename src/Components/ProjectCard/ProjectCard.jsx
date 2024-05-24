import React from 'react';
import PropTypes from 'prop-types';

import {
  CardItem,
  SiteBlock,
  Img,
  DescriptionBlock,
  Title,
  Text,
  Stack,
  UrlBlock,
  WebsiteLink,
  GitLink,
} from './ProjectCard.styled.js';

function ProjectCard({ data }) {
  const { projectName, projectUrl, projectGit, description, techStack } = data;

  return (
    <CardItem>
      <SiteBlock>
        <Img
          width="100%"
          alt= {`${projectName} app`} 
          loading="lazy"
          src={projectUrl}
        />
        <DescriptionBlock>
          <Title>{projectName}</Title>
          <Text>{description}</Text>
          <Stack>{techStack}</Stack>
        </DescriptionBlock>
      </SiteBlock>
      <UrlBlock>
        <WebsiteLink href={projectUrl}>{projectName} app</WebsiteLink>
        <GitLink href={projectGit}>GitHUB</GitLink>
      </UrlBlock>
    </CardItem>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;
