import styled from 'styled-components';
import { Field } from 'formik';
import { media } from '../../configs/styles/mediaQueries';

export const FormikFieldLayout = styled.div`
  margin: 10px;
  textarea {
    resize: none;
    padding: 0 10px;
    border-right: 0;
    border-left: 0;
    border-top: 0;
    outline: none;
    font-family: Poppins-Medium;
    font-size: 12px;
  }
  .MuiFormHelperText-root {
    width: 200px;
    color: ${(props) => props.theme.errorRed};
  }
`;
