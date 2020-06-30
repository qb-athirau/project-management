import React from 'react';
import { Form } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '../../../components/Button';
import { ButtonWrap, ProjectFormLayout } from '../style';
import FormikField from '../../../components/FormikField';
import TextArea from '../../../components/TextArea';

export const AddNotesForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="AddNotes" method="post" onSubmit={handleSubmit}>
      <ProjectFormLayout>
        <FormikField name="label" label="Label" className="wrapper" fullWidth autoComplete="off" />
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
        <ButtonWrap>
          <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? `ADDING...` : `ADD`}
          </Button>
        </ButtonWrap>
      </ProjectFormLayout>
    </Form>
  );
};
