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
  ReduxImg,
  MuiImg,
  NodeImg,
  MongoDBImg,
  DockerImg,
} from '../../assets/icons/IconsComponent';

function TechStackSection() {
  const StackArr = [
    { id: 0, techStack: 'HTML', img: <HtmlImg width={'64'} /> },
    { id: 1, techStack: 'CSS', img: <CssImg width={'64'} /> },
    { id: 2, techStack: 'SAAS', img: <SaasImg width={'64'} /> },
    { id: 3, techStack: 'Figma', img: <FigmaImg width={'64'} /> },
    { id: 4, techStack: 'WebPack', img: <WebPackImg width={'64'} /> },
    { id: 5, techStack: 'JS', img: <JsImg width={'64'} /> },
    { id: 6, techStack: 'TS', img: <TsImg width={'64'} /> },
    { id: 7, techStack: 'React', img: <ReactImg width={'64'} /> },
    { id: 8, techStack: 'Redux', img: <ReduxImg width={'64'} /> },
    { id: 9, techStack: 'Mui', img: <MuiImg width={'64'} /> },
    { id: 10, techStack: 'Node', img: <NodeImg width={'64'} /> },
    { id: 11, techStack: 'MongoDB', img: <MongoDBImg width={'64'} /> },
    { id: 12, techStack: 'Docker', img: <DockerImg width={'64'} /> },
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
                /> */}
                {stack.img}
              </Picture>
            </TechItem>
          );
        })}
      </TechList>
    </Section>
  );
}

export default TechStackSection;
