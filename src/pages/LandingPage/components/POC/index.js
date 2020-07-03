import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { faPlusCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../../../components/Modal/useModal';
import { CustomModal } from '../../../../components/Modal/customModal';
import PopperMenuItem from '../../../../components/Popper';
import { popperList } from '../../../../configs/constants';
import { POCLayout } from './style';

const POC = (props) => {
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
      props.openAddPOC(item);
    } else {
      toggleModal();
      itemToBeDeleted.current = item;
    }
  };
  const handleContinueClick = () => {
    props.deletePOCDetail(itemToBeDeleted.current);
  };
  return (
    <POCLayout className="poc">
      <section className="panel-header">
        <span>Point of Contacts</span>
        <span>
          <FontAwesomeIcon className="plus-icon" onClick={props.openAddPOC} icon={faPlusCircle} />
        </span>
      </section>
      <section className="poc-list-section">
        {props.data?.poc?.map((item, index) => (
          <div className="poc-li">
            <span title={item.pocName} className="poc-name">
              {item.pocName}
            </span>
            <span title={item.email} className="poc-email">
              {item.email}
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
            color="primary"
            size="small"
            autoFocus>
            Continue
          </Button>
        </DialogActions>
      </CustomModal>
    </POCLayout>
  );
};

export default POC;
