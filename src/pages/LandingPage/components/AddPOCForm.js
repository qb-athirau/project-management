import React, { useRef } from 'react';
import { Form } from 'formik';
import Button from '../../../components/Button';
import { ButtonWrap, ProjectFormLayout } from '../style';
import FormikField from '../../../components/FormikField';

export const AddPOCForm = (props) => {
  const { errors, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="Add project" method="post" onSubmit={handleSubmit}>
      <ProjectFormLayout>
        <FormikField name="pocName" label="Name" className="wrapper" fullWidth autoComplete="off" />
        <FormikField
          name="email"
          label="Email"
          type="email"
          autoComplete="off"
          placeholder="ex: myname@example.com"
          fullWidth
          className="wrapper"
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
