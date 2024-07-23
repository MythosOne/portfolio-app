import React from 'react';
import PropTypes from 'prop-types';

import resume from "assets/resume/victor_avramidi_resume.pdf"

import { BlockBtn, DownloadBtn, ButtonImg } from './ResumeButton.styled';

import { ResumeBtnImg } from 'assets/icons/IconsComponent';

function ResumeButton() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'victor_avramidi_resume.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <BlockBtn>
        <DownloadBtn onClick={handleDownload} type="submit" title="Submit form">
          Download CV
          <ButtonImg>
            <ResumeBtnImg width={'16'} height={'16'} />
          </ButtonImg>
        </DownloadBtn>
      </BlockBtn>
    </>
  );
}

ResumeButton.propTypes = {};

export default ResumeButton;
