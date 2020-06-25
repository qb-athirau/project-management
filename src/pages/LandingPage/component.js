import React, { useEffect, useState, useRef } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import TabPanel from '../../components/TabPanel';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SliderArrow from '../../components/SliderArrow';
import Button from '../../components/Button';
import { useModal } from '../../components/Modal/useModal';
import { CustomModal } from '../../components/Modal/customModal';
import Toolbar from '../../components/Toolbar';
import MainLoader from '../../components/Loader';
import { ProjectForm } from './components/Form';
import { toolbarList } from '../../configs/constants';
import POC from './components/POC';
import Notes from './components/Notes';
import { BasicInfoForm } from './components/BasicInfoForm';
import validator from './validate';
import {
  Aside,
  ArrowContainer,
  ContentSection,
  LandingSection,
  Heading,
  FirstPanel,
} from './style';

const EnhancedForm = withFormik({
  mapPropsToValues: (props) => ({
    name: '',
    description: '',
    status: 0,
  }),
  validationSchema: Yup.object().shape(validator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addProject(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Add Project Form',
})(ProjectForm);

const EnhancedBasicInfoForm = withFormik({
  mapPropsToValues: (props) => ({
    clientName: '',
    phoneNumber: '',
    name: '',
    renewalDate: new Date(),
    brokerName: '',
    liveNum: 0,
    caseStatus: '',
    salesStage: '',
    probability: 0,
    quoteStatus: '',
  }),
  handleBlur: (values, { props, setSubmitting }) => {
    props.addProject(values);
  },
  displayName: 'Basic Info Form',
})(BasicInfoForm);

const LandingPage = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const node = useRef();

  useEffect(() => {
    props.getProjects();
  }, []);

  const handleAddProject = (data) => {
    props.addProject(data);
    setItemModalOpen(false);
  };
  const handleTabIndex = (newValue) => {
    setTabIndex(newValue);
  };
  return (
    <React.Fragment>
      <Header />
      {props.loading && <MainLoader />}
      <LandingSection className="container">
        <Aside isOpen={open}>
          <div className="left-sidebar" ref={node}>
            <ArrowContainer isOpen={open}>
              <Button onClick={toggleModal}>Add New Case</Button>
              <SliderArrow open={open} setOpen={setOpen} />
            </ArrowContainer>
            <Sidebar
              projectList={props.projectList ?? []}
              active={active}
              setActive={setActive}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </Aside>
        <section className="content-section-wrap">
          <ContentSection className="content" isOpen={open}>
            <section className="toolbar-wrapper">
              <Toolbar
                tabDetails={toolbarList}
                handleTabIndex={(value) => handleTabIndex(value)}></Toolbar>
            </section>
            <TabPanel className="tabpanel" value={tabIndex} index={0}>
              <FirstPanel className="panel-one-wrapper">
                <section className="basic-info">
                  <section className="panel-header">
                    <span>Case Basic Info</span>
                  </section>
                  <section className="form-section">
                    <EnhancedBasicInfoForm />
                  </section>
                </section>
                <POC />
                <Notes />
              </FirstPanel>
            </TabPanel>
            <TabPanel className="tabpanel" value={tabIndex} index={1}>
              Item Two
            </TabPanel>
            <TabPanel className="tabpanel" value={tabIndex} index={2}>
              Item Three
            </TabPanel>
            <TabPanel className="tabpanel" value={tabIndex} index={3}>
              Item Four
            </TabPanel>
          </ContentSection>
        </section>
        <CustomModal
          title="Item Modal"
          open={itemModalOpen}
          handleClose={() => setItemModalOpen(false)}>
          <Heading>Case Details</Heading>
          <EnhancedForm addProject={(payload) => handleAddProject(payload)} />
        </CustomModal>
      </LandingSection>
    </React.Fragment>
  );
};

export default LandingPage;
