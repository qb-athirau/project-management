import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalWrap } from './style';

export const CustomModal = ({ open, handleClose, children, height, closeIcon }) => {
  return (
    <ModalWrap
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      height={height}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div className="paper">
          {closeIcon && (
            <FontAwesomeIcon className="close-icon" onClick={handleClose} icon={faTimes} />
          )}
          {children}
        </div>
      </Fade>
    </ModalWrap>
  );
};
