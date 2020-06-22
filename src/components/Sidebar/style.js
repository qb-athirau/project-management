import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideNav = styled.div`
  .sidenav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 22px 2px 3px 22px;
    .navlink {
      display: flex;
      text-align: center;
      justify-content: normal;
      padding-bottom: 20px;
      cursor: pointer;
    }
  }
`;

export const SpanText = styled.span`
  width: ${(props) => (props.isOpen ? '140px' : 0)};
  overflow: hidden;
  padding-left: 18px;
  padding-top: 12px;
  height: 40px;
  opacity: 0.8;
  font-family: Google Sans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.Gray20};
  text-align: left;
  transition: width 1s;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  ponter-events: ${(props) => (props.isDisable ? 'none' : 'visible')} &.active {
    & > span {
      opacity: 1.8 !important;
    }
  }
`;
