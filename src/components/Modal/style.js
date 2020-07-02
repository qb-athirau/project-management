import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { media } from '../../configs/styles/mediaQueries';

export const ModalWrap = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  outline: none;
  ${media.mediumScreen} {
    height: 400px;
    width: 400px;
  }
  .paper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.mediumScreen} {
      height: 350px;
      width: 400px;
      overflow-y: auto;
    }
    border: 1px solid ${(props) => props.theme.veryLightGrey};
    border-radius: 10px;
    background-color: ${(props) => props.theme.pureWhite};
    padding: 2px 4px 3px;
  }
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 2rem;
    font-size: 20px;
    color: ${(props) => props.theme.veryLightGrey};
    cursor: pointer;
  }

  .wrapper {
    width: 300px;
    &.MuiFormLabel-root {
      font-size: 12px;
      padding-left: 10px;
    }
  }
  .message {
    padding-left: 10px;
    color: ${(props) => props.theme.toastSuccess};
    width: 216px;
  }
  .appointment-btn {
    width: 120px;
  }
`;
