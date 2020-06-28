import styled from 'styled-components';

export const POCLayout = styled.section`
  &.poc {
    padding: 5px;
    width: 33%;
  }
  .plus-icon {
    color: ${(props) => props.theme.buttonGreen};
    font-size: 16px;
  }
`;
