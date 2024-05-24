import React from 'react';
import PropTypes from 'prop-types';
import AboutSection from 'components/AboutSection/AboutSection';
import ProjectsSection from 'components/ProjectsSection/ProjectsSection';
import ContactsSection from 'components/ContactsSection/ContactsSection';

import {Main} from './HomePage.styled.js';

function HomePage() {
  return (
    <Main>
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </Main>
  );
}

HomePage.propTypes = {};

export default HomePage;
