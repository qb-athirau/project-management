import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MainLoaderWrapper from './style';

const MainLoader = () => (
  <MainLoaderWrapper>
    <FontAwesomeIcon spin icon={faSpinner} className="icon" />
  </MainLoaderWrapper>
);

export default MainLoader;
