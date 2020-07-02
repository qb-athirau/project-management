import styled from 'styled-components';

export const FormikSelectLayout = styled.div`
  .MuiFormHelperText-root {
    width: 200px;
    color: ${(props) => props.theme.errorRed};
  }
  .MuiInputBase-root {
    font-family: Poppins-Medium;
    font-size: 12px;
  }
`;
