import React from 'react';
import PropTypes from 'prop-types';

import { BlockBtn, AboutBtn, ButtonImg } from './AboutButton.styled';

function AboutButton({
  onClick,
  type,
  title,
  btnText,
  IconComponent,
  width,
  height,
}) {
  return (
    <>
      <BlockBtn>
        <AboutBtn onClick={onClick} type={type} title={title}>
          {btnText}
          <ButtonImg>
            <IconComponent width={width} height={height} />
          </ButtonImg>
        </AboutBtn>
      </BlockBtn>
    </>
  );
}

AboutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default AboutButton;
