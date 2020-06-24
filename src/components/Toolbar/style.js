import styled, { css } from 'styled-components';

export const ToolbarNav = styled.ul`
  &.nav {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    padding: 0;
    font-size: 12px;
    font-family: Poppins-Medium;
  }
`;
const activeCss = css`
  background: ${(props) => props.theme.speechBlue};
  color: ${(props) => props.theme.pureWhite};
  ::after {
    border-left: 10px solid ${(props) => props.theme.speechBlue};
  }
`;
export const ToolbarNavLi = styled.li`
  &.nav-li {
    background: ${(props) => props.theme.veryLightGrey};
    padding: 0.5rem 1rem 0.5rem 2rem;
    position: relative;
    transition: all 0.2s;
    cursor: pointer;
    :nth-child(2) {
      ${({ active }) => active && active === 1 && activeCss}}
    :nth-child(3) {
      ${({ active }) => active && active === 2 && activeCss}}
    }
    :nth-child(4) {
      ${({ active }) => active && active === 3 && activeCss}}
    }
    :active {
      background: ${(props) => props.theme.speechBlue};
    }
    :hover {
      background: ${(props) => props.theme.whisper};
      ::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        display: inline-block;
        border: 17px solid transparent;
        border-left: 10px solid ${(props) => props.theme.whisper};
        border-right: 0;
        margin-right: -10px;
      }
    }
    :first-child {
      padding: 0.5rem 1rem;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      ${({ active }) => active === 0 && activeCss}}
    }
    :not(:last-child) {
      margin-right: 10px;
    }
    :after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      display: inline-block;
      border: 17px solid transparent;
      border-left: 10px solid ${(props) => props.theme.veryLightGrey};
      border-right: 0;
      margin-right: -10px;
      transition: all 0.2s;
    }
    :not(:first-child):before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: inline-block;
      border: 17px solid transparent;
      border-left: 10px solid ${(props) => props.theme.pureWhite};
      border-right: 0;
    }
  }
`;
