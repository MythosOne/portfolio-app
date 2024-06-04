import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  TechList,
  TechItem,
  Picture,
  Image,
} from './TechStackSection.styled';

import {
  HtmlImg,
  CssImg,
  SaasImg,
  FigmaImg,
  WebPackImg,
  JsImg,
  TsImg,
  ReactImg,
  MuiImg,
  NodeImg,
  MongoDBImg,
  DockerImg,
} from '../../assets/icons/IconsComponent';

function TechStackSection() {
  const StackArr = [
    { id: 0, techStack: 'HTML', img: <HtmlImg /> },
    { id: 1, techStack: 'CSS', img: <CssImg /> },
    { id: 2, techStack: 'SAAS', img: <SaasImg /> },
    { id: 3, techStack: 'Figma', img: <FigmaImg /> },
    { id: 4, techStack: 'WebPack', img: <WebPackImg /> },
    { id: 5, techStack: 'JS', img: <JsImg /> },
    { id: 6, techStack: 'TS', img: <TsImg /> },
    { id: 7, techStack: 'React', img: <ReactImg /> },
    { id: 8, techStack: 'Mui', img: <MuiImg /> },
    { id: 9, techStack: 'Node', img: <NodeImg /> },
    { id: 10, techStack: 'MongoDB', img: <MongoDBImg /> },
    { id: 11, techStack: 'Docker', img: <DockerImg /> },
  ];

  return (
    <Section id="tech">
      <Title>Tech Stack</Title>
      <TechList>
        {StackArr.map(stack => {
          return (
            <TechItem key={stack.id}>
              <Picture>
                {/* <Image
                  src={stack.img}
                  width="60"
                  height="60"
                  alt={`${stack.techStack} image`}
                  loading="lazy"
                /> */}{stack.img}
              </Picture>
            </TechItem>
          );
        })}
      </TechList>
    </Section>
  );
}

export default TechStackSection;
