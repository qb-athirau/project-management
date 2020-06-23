import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideNav = styled.div`
  .sidenav {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    justify-content: space-between;
    flex-direction: column;
    padding: 22px 2px 3px 22px;
    .navlink {
      display: flex;
      text-align: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
  .list-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    font-family: Poppins-Bold;
  }
`;

export const SpanText = styled.span`
  overflow: hidden;
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
  &.descriptn {
    color: ${(props) => props.theme.lightGrey};
    font-size: 12px;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  height: 45px;
  ponter-events: ${(props) => (props.isDisable ? 'none' : 'visible')} &.active {
    & > span {
      opacity: 1.8 !important;
    }
  }
  .span-wraper {
    display: flex;
    flex-direction: column;
  }
  .circle {
    width: 33px;
    height: 33px;
  }
`;
