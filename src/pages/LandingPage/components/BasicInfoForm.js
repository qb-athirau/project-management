import React, { useRef } from 'react';
import { Form } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '../../../components/Button';
import { ButtonWrap, BasicFormLayout } from '../style';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';
import TextArea from '../../../components/TextArea';
import { caseStatusList, salesStageList } from '../../../configs/constants';

export const BasicInfoForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="BasicInfo Form" method="post" onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BasicFormLayout>
          <FormikField
            name="name"
            label="Project Name"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <FormikField
            name="name"
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
              name="dateOfAppointmnt"
              label="RenewalDate"
              component={DatePicker}
              format="dd/MM/yyyy"
              autoComplete="off"
            />
            <FormikField
              name="status"
              label="No of Lives"
              type="number"
              className="wrapper"
              fullWidth
              autoComplete="off"
            />
          </div>
          <FormikField
            name="name"
            label="Current Broker"
            className="wrapper"
            fullWidth
            autoComplete="off"
          />
          <FormikSelect
            items={caseStatusList}
            type="text"
            name="gender"
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
              name="gender"
              label="Sales Stage"
              autoCapitalize="off"
              autoCorrect="off"
              placeholder=""
              required
            />
            <FormikField
              name="status"
              label="Probability"
              type="number"
              className="wrapper"
              fullWidth
              autoComplete="off"
            />
          </div>
          <FormikSelect
            items={caseStatusList}
            type="text"
            name="gender"
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
