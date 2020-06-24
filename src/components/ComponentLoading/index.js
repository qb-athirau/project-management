import React from 'react';
import PropTypes from 'prop-types';
import { Mask, PlaceholderWrap, Message } from './style';
import { FailedLoading } from '../../configs/errorText';
import MainLoader from '../Loader';

export const ComponentLoading = ({ error, timedOut, pastDelay }) => {
  if (error) {
    return (
      <Mask>
        <PlaceholderWrap>
          <Message status="error" message={FailedLoading}>
          </Message>
        </PlaceholderWrap>
      </Mask>
    );
  } else if (timedOut || pastDelay) {
    return (
      <Mask>
        <MainLoader />
      </Mask>
    );
  }

  return null;
};

ComponentLoading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: true,
};

ComponentLoading.propTypes = {
  error: PropTypes.any,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
};
