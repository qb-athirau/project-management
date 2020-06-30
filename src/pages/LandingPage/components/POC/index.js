import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PopperMenuItem from '../../../../components/Popper';
import { popperList } from '../../../../configs/constants';
import { POCLayout } from './style';

const POC = (props) => {
  const [open, setOpen] = useState();

  const handleTooltipOpen = (index) => {
    setOpen(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const menuItemClick = (label, item) => {
    if (label === 'Edit') {
      props.openAddPOC(item);
    } else {
      props.deletePOCDetail(item);
    }
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
    </POCLayout>
  );
};

export default POC;
