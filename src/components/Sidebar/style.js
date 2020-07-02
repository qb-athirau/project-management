import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideNav = styled.div`
  .sidenav {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    justify-content: space-between;
    flex-direction: column;
    padding: 0 2px 3px 12px;
    .navlink {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      :hover {
        background-color: ${(props) => props.theme.solitude};
      }
    }
  }
  .list-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    font-family: Poppins-Bold;
    font-size: 12px;
    margin: 20px 10px 0 10px;
  }
  }
`;

export const SpanText = styled.span`
  overflow: hidden;
  opacity: 0.8;
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
    max-width: 140px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
    margin-left: 10px;
  }
  .circle {
    width: 33px;
    height: 33px;
    margin-right: 10px;
  }
`;
