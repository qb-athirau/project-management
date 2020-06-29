import React from 'react';
import { withFormik } from 'formik';
import POC from '../POC';
import Notes from '../Notes';
import { BasicInfoForm } from '../BasicInfoForm';
import { FirstPanelLayout } from '../../style';

const EnhancedBasicInfoForm = withFormik({
  mapPropsToValues: (props) => ({
    clientName: props.data?.clientName ?? '',
    phoneNumber: props.data?.phoneNumber ?? '',
    name: props.data.name ?? '',
    renewalDate: props.data?.renewalDate ?? new Date(),
    brokerName: props.data.brokerName ?? '',
    liveNum: props.data.liveNum ?? 0,
    caseStatus: props.data.caseStatus ?? '',
    salesStage: props.data.salesStage ?? '',
    probability: props.data.probability ?? 0,
    quoteStatus: props.data.quoteStatus ?? '',
  }),
  mapPropsToValues: () => ({}),
  handleBlur: (values, { props, setSubmitting }) => {
    props.addProject(values);
  },
  displayName: 'Basic Info Form',
})(BasicInfoForm);

const FirstPanel = ({ match, data, handleUpdateProject }) => {
  const project = data && data.length !== 0 ? data.find((p) => p.id == match.params.projectId) : [];
  return (
    <FirstPanelLayout className="panel-one-wrapper">
      <section className="basic-info">
        <section className="panel-header">
          <span>Case Basic Info</span>
        </section>
        <section className="form-section">
          <EnhancedBasicInfoForm
            data={project}
            updateProjectData={(payload) => handleUpdateProject(payload)}
          />
        </section>
      </section>
      <POC />
      <Notes />
    </FirstPanelLayout>
  );
};

export default FirstPanel;
