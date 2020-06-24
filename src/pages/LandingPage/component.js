import React, { useEffect, useState, useRef } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SliderArrow from '../../components/SliderArrow';
import Button from '../../components/Button';
import { useModal } from '../../components/Modal/useModal';
import { CustomModal } from '../../components/Modal/customModal';
import MainLoader from '../../components/Loader';
import { ProjectForm } from './components/Form';
import validator from './validate';
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

const LandingPage = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const node = useRef();

  useEffect(() => {
    props.getProjects();
  }, []);
  const handleAddProject = (data) => {
    props.addProject(data);
    setItemModalOpen(false);
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
            Hello
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
