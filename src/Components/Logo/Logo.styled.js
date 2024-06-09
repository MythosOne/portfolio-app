import styled from '@emotion/styled';

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 28px;

  color: #2196f3;
  font-size: 24px;
  font-weight: 600;

  ///!!! No working animation, correct
  &:hover {
    .Block {
      background-color: #fff;
      transition: color 0.2s ease;
    }

    .PortfolioText {
      color: #2196f3;
      transition: color 0.2s ease;
    }
  }
`;

export const DevText = styled.span`
  color: #212121;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  background-color: #2196f3;
  height: 18px;
  margin-top: 2px;
`;

export const PortfolioText = styled.span`
  color: #fff;
  font-size: 24px;
`;
