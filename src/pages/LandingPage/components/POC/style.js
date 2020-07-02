import styled from 'styled-components';

export const POCLayout = styled.section`
  &.poc {
    padding: 5px;
    width: 33%;
  }
  .plus-icon {
    color: ${(props) => props.theme.buttonGreen};
    font-size: 16px;
    cursor: pointer;
    width: 16px;
    height: 20px;
  }
  .dots-icon {
    padding-right: 5px;
    cursor: pointer;
  }
  .poc-list-section {
    display: flex;
    flex-direction: column;
  }
  .poc-li {
    display: flex;
    // justify-content: space-between;
    padding: 14px;
    font-family: Poppins-Medium;
    font-size: 12px;
    position: relative;
    :hover {
      background-color: ${(props) => props.theme.solitude};
    }
  }
  .poc-name {
    width: 35%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .poc-email {
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .popper {
    top: 27px !important;
    right: 0;
    position: absolute !important;
    left: 263px !important;
    z-index: 1;
    li {
      font-family: Poppins-Light;
      font-size: 12px;
    }
  }
`;
