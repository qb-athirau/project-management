import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToolbarNav, ToolbarNavLi } from './style';

const Toolbar = (props) => {
  const [active, setActive] = useState(0);

  const handleClick = (value) => {
    setActive(value);
    props.handleTabIndex(value);
  };

  return (
    <ToolbarNav className="nav">
      {props.tabDetails.map((item) => (
        <ToolbarNavLi
          active={active}
          key={item.index}
          className="nav-li"
          onClick={() => handleClick(item.index)}>
          {item.label}
        </ToolbarNavLi>
      ))}
    </ToolbarNav>
  );
};

Toolbar.propTypes = {
  tabDetails: PropTypes.array.isRequired,
};

export default Toolbar;
