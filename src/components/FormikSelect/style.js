import styled from 'styled-components';

export const FormikSelectLayout = styled.div`
  .MuiFormHelperText-root {
    width: 200px;
    color: ${(props) => props.theme.errorRed};
  }
`;
