import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import {FormStyled, FieldStyled, ErrorMessagetyled, Label, ButtonSubmit} from './ContactForm.styled';

const initialValues = {
   name: '',
   number: '',
};
 
let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).max(10).required(),
});

function ContactForm({ onSubmitForm }) {
 
    const submitForm = (values, { resetForm }) => {
        onSubmitForm(values);
        resetForm();
    };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitForm}
    >
      <FormStyled autoComplete="off">
        <Label>
          Name
          <FieldStyled type="text" name="name" />
          <ErrorMessagetyled name="name" component="div" />
        </Label>

        <Label>
          Number
          <FieldStyled type="tel" name="number" />
          <ErrorMessagetyled component="div" name="number" />
        </Label>

        <ButtonSubmit type="submit">Add contacts</ButtonSubmit>
      </FormStyled>
    </Formik>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

