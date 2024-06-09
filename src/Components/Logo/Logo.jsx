import React from 'react';
import PropTypes from 'prop-types';

import { LogoWrapper, DevText, Block, PortfolioText } from './Logo.styled';

function Logo() {
  return (
    <>
      <LogoWrapper href="/">
        WEB<DevText>DEV</DevText>
        <Block>
          <PortfolioText>Portfolio</PortfolioText>
        </Block>
      </LogoWrapper>
    </>
  );
}

Logo.propTypes = {};

export default Logo;
