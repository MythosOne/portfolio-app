import React from 'react';

import resume from "assets/resume/victor_avramidi_certificate.pdf"

import { BlockBtn, DownloadBtn, ButtonImg } from './CertificateButton.styled';

import { CertificateBtnImg } from 'assets/icons/IconsComponent';

function CertificateButton() {
  const handleView = () => {
    window.open(resume, '_blank');
  }

  return (
    <>
      <BlockBtn>
        <DownloadBtn onClick={handleView} type="submit" title="Submit form">
          Certificate
          <ButtonImg>
            <CertificateBtnImg width={'24'} height={'24'} />
          </ButtonImg>
        </DownloadBtn>
      </BlockBtn>
    </>
  );
}

export default CertificateButton;
