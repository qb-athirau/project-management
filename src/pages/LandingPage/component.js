import React, { useEffect, useState, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import FirstPanel from './components/FirstPanel';
import { AddPOCForm } from './components/AddPOCForm';
import { AddNotesForm } from './components/AddNotesForm';
import { validator, PocValidator } from './validate';
import { Aside, ArrowContainer, ContentSection, LandingSection, Heading } from './style';

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

const EnhancedAddNotes = withFormik({
  mapPropsToValues: (props) => ({
    label: props.data.label ?? '',
    description: props.data.description ?? '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    let updatednote = [];
    if (props.data.id) {
      updatednote = props.projectData?.notes.map((item) => {
        if (item.id === props.data.id) {
          return {
            ...values,
            id: item.id,
          };
        }
        return item;
      });
    }
    props.updateNote({
      ...props.projectData,
      notes:
        updatednote.length !== 0
          ? updatednote
          : [
              ...(props.projectData?.notes ?? ''),
              { ...values, id: props.projectData?.notes?.length ?? 0 },
            ],
    });
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Add Notes Form',
})(AddNotesForm);

const EnhancedAddPOC = withFormik({
  mapPropsToValues: (props) => ({
    pocName: props.data.pocName ?? '',
    email: props.data.email ?? '',
  }),
  validationSchema: Yup.object().shape(PocValidator),
  handleSubmit: (values, { props, setSubmitting }) => {
    let updatedpoc = [];
    if (props.data.id) {
      updatedpoc = props.projectData?.poc.map((item) => {
        if (item.id === props.data.id) {
          return {
            ...values,
            id: item.id,
          };
        }
        return item;
      });
    }
    props.updatePoc({
      ...props.projectData,
      poc:
        updatedpoc.length !== 0
          ? updatedpoc
          : [
              ...(props.projectData?.poc ?? ''),
              { ...values, id: props.projectData?.poc?.length ?? 0 },
            ],
    });
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Add POC Form',
})(AddPOCForm);

const LandingPage = (props, match) => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(true);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [openAddPOC, setOpenAddPOC] = useState(false);
  const [openAddNotes, setOpenAddNotes] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);
  const [editPOCDetails, setEditPOCDetails] = useState({});
  const [editNote, setEditNote] = useState({});
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const node = useRef();

  useEffect(() => {
    props.getProjects();
  }, []);
  useEffect(() => {
    const pathlocation = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1,
    );
    const project =
      props.projectList && props.projectList.length !== 0
        ? props.projectList.filter((p) => p.id == pathlocation)
        : [];
    setSelectedProject(...project);
  }, [props.projectList]);

  const handleAddProject = (data) => {
    props.addProject(data);
    setItemModalOpen(false);
  };
  const handleTabIndex = (newValue) => {
    setTabIndex(newValue);
  };
  const handleUpdateProject = (payload) => {
    props.updateProject(payload, selectedProject.id);
    handleModalClose();
  };
  const handleAddPOC = (item) => {
    setEditPOCDetails(item);
    setOpenAddPOC(true);
    toggleModal();
  };
  const handleDeletePOC = (dataToRemove) => {
    const payload = {
      ...selectedProject,
      poc: selectedProject.poc.filter((item) => item.id !== dataToRemove.id),
    };
    setSelectedProject(payload);
    props.updateProject(payload, selectedProject.id);
  };
  const handleAddNotes = (item) => {
    setEditNote(item);
    setOpenAddNotes(true);
    toggleModal();
  };
  const handleDeleteNote = (dataToRemove) => {
    const payload = {
      ...selectedProject,
      notes: selectedProject.notes.filter((item) => item.id !== dataToRemove.id),
    };
    setSelectedProject(payload);
    props.updateProject(payload, selectedProject.id);
  };
  const handleModalClose = () => {
    setItemModalOpen(false);
    setEditPOCDetails({});
    setEditNote({});
    setOpenAddPOC(false);
    setOpenAddNotes(false);
  };
  if (window.location.pathname === '/project-management' && props.projectList.length) {
    const path = props.projectList[0].id;
    return <Redirect to={`/project-management/${path}`} />;
  }
  return (
    <React.Fragment>
      <Header />
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
              <span className="selected-project">
                <span className="case-label">Case Name </span>
                &nbsp;&gt;&nbsp;
                {selectedProject && <span className="case-name">{selectedProject.name}</span>}
              </span>
              <Toolbar
                tabDetails={toolbarList}
                handleTabIndex={(value) => handleTabIndex(value)}></Toolbar>
            </section>
            <TabPanel className="tabpanel" value={tabIndex} index={0}>
              {props.loading && <MainLoader />}
              {!props.loading && (
                <Route
                  path={`/project-management/:projectId`}
                  exact
                  render={(prop) => (
                    <FirstPanel
                      data={props.projectList}
                      {...prop}
                      handleUpdateProject={handleUpdateProject}
                      handleAddPOC={handleAddPOC}
                      handleDeletePOC={handleDeletePOC}
                      handleAddNotes={handleAddNotes}
                      handleDeleteNote={handleDeleteNote}
                    />
                  )}
                />
              )}
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
          {!openAddPOC && !openAddNotes && (
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
                projectData={selectedProject}
                updatePoc={(payload) => handleUpdateProject(payload)}
              />
            </React.Fragment>
          )}
          {openAddNotes && (
            <React.Fragment>
              <Heading>Add Notes</Heading>
              <EnhancedAddNotes
                data={editNote}
                projectData={selectedProject}
                updateNote={(payload) => handleUpdateProject(payload)}
              />
            </React.Fragment>
          )}
        </CustomModal>
      </LandingSection>
    </React.Fragment>
  );
};

export default LandingPage;
