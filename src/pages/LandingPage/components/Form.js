import React, { useRef } from 'react';
import { Form } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '../../../components/Button';
import { ButtonWrap, ProjectFormLayout } from '../style';
import FormikField from '../../../components/FormikField';
import TextArea from '../../../components/TextArea';

export const ProjectForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="Add project" method="post" onSubmit={handleSubmit}>
      <ProjectFormLayout>
        <FormikField
          name="name"
          label="Project Name"
          className="wrapper"
          fullWidth
          autoComplete="off"
        />
        <InputLabel className="textarea-label" htmlFor="component-simple">
          Description
        </InputLabel>
        <TextArea
          name="description"
          label="Description"
          type="text"
          className="textarea-wrapper"
          multiline
          fullWidth
          autoComplete="off"
        />
        <FormikField
          name="status"
          label="Status"
          type="number"
          className="wrapper"
          fullWidth
          autoComplete="off"
        />
        <ButtonWrap>
          <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? `ADDING...` : `ADD`}
          </Button>
        </ButtonWrap>
      </ProjectFormLayout>
    </Form>
  );
};
