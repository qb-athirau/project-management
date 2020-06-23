import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  border: 1px solid ${(props) => props.theme.veryLightGrey};
  padding: 6px 20px;
  min-width: 64px;
  height: 25px;
  font-size: 10px;
  line-height: 0.75;
  color: ${(props) => props.theme.pureWhite};
  text-shadow: 0 1px ${(props) => props.theme.pureWhite};
  cursor: pointer;
  letter-spacing: 0.02857em;
  border-radius: 20px;
  background-color: ${(props) => props.theme.buttonGreen};
  ${({ primary }) =>
    primary &&
    css`
      background: ${(props) => props.theme.speechBlue};
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    `}
  K;
`;
