import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media, shadows, colors, fonts, fontWeights } = theme;

export const Form = styled.form`
  grid-area: form;

  min-width: 320px;
  max-width: 480px;

  background-color: #f5f4fa;
  /* background-color: #eaedf1; */

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border-radius: 10px;

  padding: 8px 12px 0;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) {
    width: 342px;
  }

  @media screen and (min-width: 1279px) {
    width: 496px;
    max-width: none;

    padding: 20px 20px 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 16px;
  color: #212121;
  text-align: justify;
  font-family: ${fonts.second};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fontWeights.regular };
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  height: 36px;

  color: #212121;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  border-color: ${props => (!props.error ? '#2196f3' : '#d28b8b')};

  @media screen and (min-width: 1279px) {
    font-size: 20px;
    letter-spacing: -0.8px;

    margin: 6px 0;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 8px;

  font-family: Fira Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.04em;
  text-align: right;

  color: #d28b8b;
`;

export const InputMessage = styled.textarea`
  height: 149px;

  color: #212121;
  font-family: ${fonts.second};
  font-size: 18px;
  font-style: normal;
  font-weight: ${fontWeights.regular };
  line-height: normal;
  letter-spacing: -0.72px;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #2196f3;
  border-color: ${props => (!props.error ? '#2196f3' : '#d28b8b')};
`;

export const BlockBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SendBtn = styled.button`
  margin-top: 16px;

  padding: 3px;

  width: 99px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid #2196f3;

  background-color: #fff;

  color: #212121;
  font-family: ${fonts.second};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fontWeights.regular };
  line-height: 18px;

  margin-bottom: 16px;

  cursor: pointer;

  &:hover {
    background: #2774b2;
    color: #fff;

    transition: all 0.2s ease-in-out;

    > span {
      background: #fff;
      stroke: #2196f3;
      border: 1px solid #2196f3;

      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (min-width: 1279px) {
    margin: 32px 0 48px;
  }
`;

export const ButtonImg = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #2196f3;
  border: 0;

  stroke: #fff;
`;
