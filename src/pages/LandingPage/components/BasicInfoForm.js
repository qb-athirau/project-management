import React, { useRef, useState } from 'react';
import { Form, Field } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker } from 'formik-material-ui-pickers';
import MaskedInput from 'react-text-mask';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '../../../components/Button';
import { ButtonWrap, BasicFormLayout } from '../style';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';
import FormikRadioGroup from '../../../components/FormikRadioGroup';
import TextArea from '../../../components/TextArea';
import TextField from '@material-ui/core/TextField';
import {
  caseStatusList,
  salesStageList,
  radioBtnLabels,
  phoneRegExp,
  phoneNumberMask,
} from '../../../configs/constants';

export const BasicInfoForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit, validateField } = props;
  const [projectData, setProjectData] = useState();
  const invalidPhoneNum = useRef('');

  const validateRenewalDate = (value) => {
    if (new Date(new Date(value).toDateString()) < new Date(new Date().toDateString())) {
      props.setStatus({
        renewalDate: 'Renewal date cannot be in the past',
      });
    } else {
      props.setStatus({
        renewalDate: '',
      });
    }
  };

  const validatePhoneNumber = (value, props) => {
    if (!phoneRegExp.test(value)) {
      invalidPhoneNum.current = 'Please enter a valid phone number.';
    } else {
      invalidPhoneNum.current = '';
    }
  };

  return (
    <Form name="BasicInfo Form" method="post" onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BasicFormLayout>
          <Field
            name="radioGroup"
            options={radioBtnLabels}
            className="radio-btn"
            component={FormikRadioGroup}
          />
          <FormikField
            name="clientName"
            label="Client Name"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <InputLabel className="textarea-label" htmlFor="component-simple">
            Phone Number
          </InputLabel>
          <FormikField
            type="number"
            name="phoneNumber"
            autoCorrect="off"
            label=" Phone Number"
            fullWidth
            className="wrapper"
            validate={(value) => {
              validatePhoneNumber(value, props);
            }}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={phoneNumberMask}
                className="wrapper phone-num"
                placeholder="(--) --- --- ----"
                type="text"
                validate={(value) => {
                  validatePhoneNumber(value, props);
                }}
              />
            )}></FormikField>

          {/* {invalidPhoneNum && <div className="message">{invalidPhoneNum.current}</div>} */}
          <FormikField
            name="name"
            label="Case Name"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <span className="column-wrap">
            <div className="flex-wrap">
              <FormikField
                name="renewalDate"
                label="Renewal Date"
                inputclass="multi-field-width"
                className="field-width"
                component={DatePicker}
                disablePast
                format="dd/MM/yyyy"
                validate={(value) => {
                  validateRenewalDate(value, props);
                }}
                autoComplete="off"
              />

              <FormikField
                name="liveNum"
                label="No of Lives"
                inputclass="multi-field-width"
                className="field-width"
                type="number"
                fullWidth
                autoComplete="off"
              />
            </div>
            {props.status?.renewalDate && (
              <div className="message">{props.status?.renewalDate}</div>
            )}
          </span>
          <FormikField
            name="brokerName"
            label="Current Broker"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <FormikSelect
            items={caseStatusList}
            type="text"
            name="caseStatus"
            label="Detailed case status"
            autoCapitalize="off"
            autoCorrect="off"
            placeholder=""
          />
          <div className="flex-wrap">
            <FormikSelect
              items={salesStageList}
              type="text"
              name="salesStage"
              label="Sales Stage"
              inputclass="multi-field-width"
              className="sales-select field-width"
              autoCapitalize="off"
              autoCorrect="off"
              placeholder=""
            />
            <FormikField
              name="probability"
              label="Probability"
              type="number"
              inputclass="multi-field-width"
              className="field-width"
              fullWidth
              autoComplete="off"
            />
          </div>
          <FormikSelect
            items={caseStatusList}
            type="text"
            name="quoteStatus"
            label="Quote status"
            autoCapitalize="off"
            autoCorrect="off"
            placeholder=""
          />
          <ButtonWrap className="basic-info-submit">
            <Button tabindex={3} type="submit" disabled={isSubmitting || props.status?.renewalDate}>
              {isSubmitting ? `ADDING...` : `ADD`}
            </Button>
          </ButtonWrap>
        </BasicFormLayout>
      </MuiPickersUtilsProvider>
    </Form>
  );
};
