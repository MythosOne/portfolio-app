import React from 'react';

import { LogoWrapper, DevText, Block, PortfolioText } from './Logo.styled';

function Logo() {
  return (
    <>
      <LogoWrapper href="/portfolio-app/index.html">
        WEB<DevText>DEV</DevText>
        <Block>
          <PortfolioText>Portfolio</PortfolioText>
        </Block>
      </LogoWrapper>
    </>
  );
}

export default Logo;
