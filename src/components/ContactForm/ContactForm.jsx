import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import c from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initualValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={c.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} className={c.input} />
        <ErrorMessage name="name" component="span" className={c.error} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={numberFieldId}
          className={c.input}
        />
        <ErrorMessage name="number" component="span" className={c.error} />
        <button type="submit" className={c.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
