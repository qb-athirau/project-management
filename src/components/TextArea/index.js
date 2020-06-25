import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { FormikFieldLayout } from './style';

const TextArea = (props) => {
  return (
    <FormikFieldLayout>
      <Field {...props} as={TextareaAutosize} helperText={<ErrorMessage name={props.name} />} />
    </FormikFieldLayout>
  );
};

export default TextArea;
