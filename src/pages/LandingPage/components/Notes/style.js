import styled from 'styled-components';

export const NotesLayout = styled.section`
  &.notes {
    padding: 5px;
    width: 33%;
  }
  .plus-icon {
    color: ${(props) => props.theme.buttonGreen};
    font-size: 16px;
  }
  .notes-list-section {
    display: flex;
    flex-direction: column;
  }
  .dots-icon {
    padding-right: 5px;
  }
  .notes-li {
    display: flex;
    justify-content: space-between;
    margin: 14px;
    font-family: Poppins-Medium;
    font-size: 12px;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.Gray20};
    :hover {
      background-color: ${(props) => props.theme.veryLightGrey};
    }
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
  .header-label {
    display: flex;
    justify-content: flex-start;
  }
  .note-label {
    color: ${(props) => props.theme.labelGrey};
    font-size: 10px;
  }
`;
