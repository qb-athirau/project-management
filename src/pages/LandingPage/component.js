import React, { useEffect, useState, useRef } from 'react';
import { Route } from 'react-router-dom';
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
// import FirstPanel from './components/FirstPanel';
import { BasicInfoForm } from './components/BasicInfoForm';
import { AddPOCForm } from './components/AddPOCForm';
import { validator, PocValidator } from './validate';
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

const EnhancedAddPOC = withFormik({
  mapPropsToValues: (props) => ({
    pocName: props.data.pocName ?? '',
    email: props.data.email ?? '',
  }),
  validationSchema: Yup.object().shape(PocValidator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.updatePoc({
      ...props.data,
      poc: [...(props.data?.poc ?? ''), { ...values }],
    });
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Add POC Form',
})(AddPOCForm);

const LandingPage = (props, match) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [openAddPOC, setOpenAddPOC] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);
  const [editPOCDetails, setEditPOCDetails] = useState([]);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const node = useRef();

  useEffect(() => {
    props.getProjects();
  }, []);
  useEffect(() => {
    const project =
      props.projectList && props.projectList.length !== 0
        ? props.projectList.find((p) => p.id == '2')
        : [];
    setSelectedProject(project);
  }, [props.projectList]);
  const handleAddProject = (data) => {
    props.addProject(data);
    setItemModalOpen(false);
  };
  const handleTabIndex = (newValue) => {
    setTabIndex(newValue);
  };
  const handleUpdateProject = (payload) => {
    props.updateProject(payload);
  };
  const handleAddPOC = (item) => {
    setEditPOCDetails(item);
    setOpenAddPOC(true);
    toggleModal();
  };
  const handleDeletePOC = (dataToRemove) => {
    const payload = {
      ...selectedProject,
      poc: selectedProject.poc.filter((item) => item.email !== dataToRemove.email),
    };
    setSelectedProject(payload);
    props.updateProject(payload);
  };
  const handleModalClose = () => {
    setItemModalOpen(false);
    setOpenAddPOC(false);
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
              {/* <FirstPanel data={props.projectList ?? []} />
              <Route
                path={`/:projectId`}
                exact
                render={(props) => <FirstPanel data={props.projectList} {...props} />}
              /> */}
              <FirstPanel className="panel-one-wrapper">
                <section className="basic-info">
                  <section className="panel-header">
                    <span>Case Basic Info</span>
                  </section>
                  <section className="form-section">
                    <EnhancedBasicInfoForm
                      updateProjectData={(payload) => handleUpdateProject(payload)}
                    />
                  </section>
                </section>
                <POC
                  openAddPOC={handleAddPOC}
                  deletePOCDetail={handleDeletePOC}
                  data={selectedProject}
                />
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
            <TabPanel className="tabpanel" value={tabIndex} index={4}>
              Item Five
            </TabPanel>
          </ContentSection>
        </section>
        <CustomModal title="Item Modal" open={itemModalOpen} handleClose={() => handleModalClose()}>
          {!openAddPOC && (
            <React.Fragment>
              <Heading>Case Details</Heading>
              <EnhancedForm addProject={(payload) => handleAddProject(payload)} />
            </React.Fragment>
          )}
          {openAddPOC && (
            <React.Fragment>
              <Heading>Add POC Details</Heading>
              <EnhancedAddPOC
                data={editPOCDetails}
                updatePoc={(payload) => handleUpdateProject(payload)}
              />
            </React.Fragment>
          )}
        </CustomModal>
      </LandingSection>
    </React.Fragment>
  );
};

export default LandingPage;
