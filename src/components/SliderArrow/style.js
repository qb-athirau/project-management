import styled from 'styled-components';

export const StyledArrow = styled.div`
  background: transparent;
  cursor: pointer;
  border: none;
  margin-left: 15px;
  :focus {
    outline: none;
  }
  .arrow-icon {
    color: ${(props) => props.theme.veryLightGrey};
  }
`;
