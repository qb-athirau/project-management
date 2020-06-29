import React from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const PopperMenuItem = (props) => {
  return (
    <Popper
      open={props.open}
      role={undefined}
      transition
      className="popper"
      placement={props.placement}
      disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
          }}>
          <Paper>
            <ClickAwayListener onClickAway={props.handleClose}>
              <MenuList autoFocusItem={props.open} id="menu-list-grow">
                {props.popperList.map((item) => (
                  <MenuItem onClick={() => props.menuItemClick(item)}>{item}</MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default PopperMenuItem;
