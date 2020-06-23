import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorThemes from '../../configs/styles/colorThemes';
import { StyledSideNav, SpanText, StyledLink } from './style';

const Sidebar = ({ open, ...props }) => {
  const [active, setActive] = React.useState(false);
  const projectList = props.projectList ? props.projectList : [];
  return (
    <StyledSideNav isOpen={open}>
      <div className="sidenav">
        <div className="list-header">
          <span>Project Name</span>
          <span>status</span>
        </div>
        {projectList?.map((item, index) => {
          return (
            <StyledLink
              to={item.id}
              className="navlink"
              key={item.id}
              onClick={(e) => {
                setActive(true);
              }}
              title={item.name}>
              <span className="span-wraper">
                <SpanText isOpen={open}>{item.name}</SpanText>
                <SpanText className="descriptn" isOpen={open}>
                  {item.description}
                </SpanText>
              </span>
              <span className="circle">
                <CircularProgressbar
                  value={item.status}
                  text={`${item.status}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: `${colorThemes.Gray20}`,
                    textSize: '25px',
                  })}
                />
              </span>
            </StyledLink>
          );
        })}
      </div>
    </StyledSideNav>
  );
};
export default Sidebar;
