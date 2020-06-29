import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';

export const validator = {
  name: Yup.string().required(validationText.requireName),
  status: Yup.string().required(validationText.requireStatus),
};

export const PocValidator = {
  pocName: Yup.string().required(validationText.requireName),
  email: Yup.string().email(validationText.invalidEmail).required(validationText.requireEmail),
};
