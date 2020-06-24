import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';

const validator = {
  name: Yup.string().required(validationText.requireName),
  status: Yup.string().required(validationText.requireStatus),
};

export default validator;
