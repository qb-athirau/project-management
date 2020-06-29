import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PopperMenuItem from '../../../../components/Popper';
import { popperList } from '../../../../configs/constants';
import { NotesLayout } from './style';

const Notes = (props) => {
  const [open, setOpen] = useState();

  const handleTooltipOpen = (index) => {
    setOpen(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const menuItemClick = (label, item) => {
    // if (label === 'Edit') {
    //   props.openAddPOC(item);
    // } else {
    //   props.deletePOCDetail(item);
    // }
  };
  return (
    <NotesLayout className="notes">
      <section className="panel-header">
        <span className="header-label">Case Notes</span>
        <span>
          <FontAwesomeIcon className="plus-icon" onClick={props.openAddPOC} icon={faPlusCircle} />
        </span>
      </section>
      <section className="notes-list-section">
        {props.data?.notes?.map((item, index) => (
          <div className="notes-li">
            <span className="column-wrap">
              <span>{item.label}</span>
              <span>{item.description}</span>
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
    </NotesLayout>
  );
};

export default Notes;
