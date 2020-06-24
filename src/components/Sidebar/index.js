import React from 'react';
import { StyledSideNav, SpanText, StyledLink } from './style';
const Sidebar = ({ open, ...props }) => {
  const [active, setActive] = React.useState(false);
  const projectList = [];

  return (
    <StyledSideNav>
      <div className="sidenav">
        {projectList.map((item, index) => {
          return (
            <StyledLink
              style={{
                pointerEvents: item.isDisable ? 'none' : 'visible',
              }}
              to={item.link}
              className="navlink"
              key={item.id}
              onClick={(e) => {
                setActive(true);
              }}
              title={item.label}>
              <SpanText isOpen={open}>{item.label}</SpanText>
            </StyledLink>
          );
        })}
      </div>
    </StyledSideNav>
  );
};
export default Sidebar;
