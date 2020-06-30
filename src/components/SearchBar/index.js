import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { SearchLayout } from './style';

const SearchBar = (props) => {
  return (
    <SearchLayout>
      <Paper component="form" className="paper">
        <InputBase
          className="input"
          placeholder="Search for ..."
          inputProps={{ 'aria-label': 'search projects' }}
          onChange={props.onChange}
        />
        <IconButton type="submit" className="iconButton" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchLayout>
  );
};

export default SearchBar;
