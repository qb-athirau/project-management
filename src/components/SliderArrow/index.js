import React from 'react';
import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledArrow } from './style';

const SliderArrow = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledArrow
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}>
      <FontAwesomeIcon className="arrow-icon" icon={open ? faChevronLeft : faChevronRight} />
    </StyledArrow>
  );
};

SliderArrow.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SliderArrow;
