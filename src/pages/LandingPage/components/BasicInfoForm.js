import React, { useRef } from 'react';
import { Form, Field } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '../../../components/Button';
import { ButtonWrap, BasicFormLayout } from '../style';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';
import FormikRadioGroup from '../../../components/FormikRadioGroup';
import TextArea from '../../../components/TextArea';
import { caseStatusList, salesStageList, radioBtnLabels } from '../../../configs/constants';

export const BasicInfoForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit } = props;
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
            label="Project Name"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <FormikField
            name="phoneNumber"
            label="Phone Number"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <FormikField
            name="name"
            label="Case Name"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <div className="flex-wrap">
            <FormikField
              name="renewalDate"
              label="Renewal Date"
              inputclass="multi-field-width"
              className="field-width"
              component={DatePicker}
              format="dd/MM/yyyy"
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
            required
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
              required
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
            required
          />
        </BasicFormLayout>
      </MuiPickersUtilsProvider>
    </Form>
  );
};
