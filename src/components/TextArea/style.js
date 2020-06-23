import styled from 'styled-components';
import { Field } from 'formik';
import { media } from '../../configs/styles/mediaQueries';

export const FormikFieldLayout = styled.div`
  margin: 10px;
  textarea {
    resize: none;
    padding: 10px;
  }
  .MuiFormHelperText-root {
    width: 200px;
    color: ${(props) => props.theme.errorRed};
  }
`;
