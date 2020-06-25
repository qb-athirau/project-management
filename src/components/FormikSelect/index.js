import React, { ReactNode } from 'react';
import { Field, ErrorMessage } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { FormikSelectLayout } from './style';

const MaterialUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect = (props) => {
  return (
    <FormikSelectLayout>
      <Field {...props} as={MaterialUISelectField} errorString={<ErrorMessage name={props.name} />}>
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </FormikSelectLayout>
  );
};

export default FormikSelect;
