import styled from 'styled-components';

export const SearchLayout = styled.div`
  .paper {
    padding: 2px 4px;
    display: flex;
    alignitems: center;
    height: 25px;
    margin: 10px;
    border: 1px solid ${(props) => props.theme.veryLightGrey};
    border-radius: 0;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  .iconButton {
    color: ${(props) => props.theme.veryLightGrey};
  }
  input {
    font-family: Poppins-Medium;
    font-size: 10px;
  }
`;
