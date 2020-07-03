import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { useModal } from '../../../../components/Modal/useModal';
import { CustomModal } from '../../../../components/Modal/customModal';
import PopperMenuItem from '../../../../components/Popper';
import { popperList } from '../../../../configs/constants';
import { NotesLayout } from './style';

const Notes = (props) => {
  const [open, setOpen] = useState();
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const itemToBeDeleted = useRef();

  const handleTooltipOpen = (index) => {
    setOpen(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleModalClose = () => {
    setItemModalOpen(false);
  };
  const menuItemClick = (label, item) => {
    if (label === 'Edit') {
      props.openAddNote(item);
    } else {
      toggleModal();
      itemToBeDeleted.current = item;
    }
  };
  const handleContinueClick = () => {
    props.deleteNote(itemToBeDeleted.current);
  };

  return (
    <NotesLayout className="notes">
      <section className="panel-header">
        <span className="header-label">Case Notes</span>
        <span>
          <FontAwesomeIcon className="plus-icon" onClick={props.openAddNote} icon={faPlusCircle} />
        </span>
      </section>
      <section className="notes-list-section">
        {props.data?.notes?.map((item, index) => (
          <div className="notes-li">
            <span className="column-wrap">
              <span className="note-label">{item.label}</span>
              <span className="note-desc">{item.description}</span>
            </span>
            <FontAwesomeIcon
              className="dots-icon"
              onClick={() => handleTooltipOpen(index)}
              icon={faEllipsisV}
            />
            <PopperMenuItem
              open={open === index}
              className="popper"
              handleClose={handleClose}
              popperList={popperList}
              menuItemClick={(label) => menuItemClick(label, item)}
            />
          </div>
        ))}
      </section>
      <CustomModal height="150px" open={itemModalOpen} handleClose={() => handleModalClose()}>
        <span>Are you sure to remove this item from the list ?</span>
        <DialogActions>
          <Button variant="contained" size="small" onClick={() => handleModalClose()}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleContinueClick()}
            size="small"
            color="primary"
            autoFocus>
            Continue
          </Button>
        </DialogActions>
      </CustomModal>
    </NotesLayout>
  );
};

export default Notes;
