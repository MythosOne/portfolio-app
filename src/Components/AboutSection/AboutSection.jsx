import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  TitleSection,
  AboutList,
  AboutItem,
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
          <Picture>
            <AboutImage
              width="240"
              height="240"
              alt="about image"
              loading="lazy"
            ></AboutImage>
          </Picture>
        </AboutItem>
        <AboutItem>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            laboriosam, accusamus illum dolore eum, repudiandae cupiditate non
            tempora fuga quae. Autem, veniam eligendi unde laudantium, id amet,
            voluptate expedita aliquam debitis repudiandae culpa maxime. Dolorum
            in eveniet voluptates rerum dolores asperiores modi, numquam magni
            laudantium eius earum. Eaque iusto dignissimos doloremque autem!
            Atque facilis minima autem officia quas vero blanditiis architecto
            facere tempora nostrum natus, voluptatem consectetur labore
            perspiciatis assumenda sunt, enim voluptate mollitia, expedita
            suscipit animi quibusdam! Aut, dolorem inventore harum facilis ea
            iusto nostrum eius veniam fugiat modi quod eaque. Cupiditate neque
            consequatur, voluptatibus blanditiis ratione deleniti.
          </Description>
        </AboutItem>
      </AboutList>
    </Section>
  );
}

AboutSection.propTypes = {};

export default AboutSection;
