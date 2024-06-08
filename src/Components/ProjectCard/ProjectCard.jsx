import React from 'react';
import PropTypes from 'prop-types';

import {
  CardItem,
  SiteBlock,
  Picture,
  Img,
  DescriptionBlock,
  Title,
  Text,
  StackList,
  StackItem,
  UrlBlock,
  WebsiteLink,
  GitLink,
} from './ProjectCard.styled.js';

function ProjectCard({ data }) {
  const {
    projectName,
    projectImg,
    projectUrl,
    projectGit,
    description,
    techStack,
  } = data;

  return (
    <CardItem>
      <SiteBlock>
        <Picture>
          <Img
            width="100%"
            alt={`${projectName} app`}
            loading="lazy"
            src={projectImg}
          />
        </Picture>
        <DescriptionBlock>
          <Title>{projectName}</Title>
          <Text>{description}</Text>
          <StackList>
            {techStack.map((stack, index) => {
              return (
                <StackItem key={index}>
                  <Picture>{stack}</Picture>
                </StackItem>
              );
            })}
          </StackList>
        </DescriptionBlock>
      </SiteBlock>
      <UrlBlock>
        <WebsiteLink
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {projectName} app
        </WebsiteLink>
        <GitLink href={projectGit} target="_blank" rel="noopener noreferrer">
          GitHUB
        </GitLink>
      </UrlBlock>
    </CardItem>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;
