import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import c from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passFielfId = nanoid();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ name, email, password }));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={c.form}>
        <label htmlFor={nameFieldId}>Username</label>

        <Field
          type="text"
          name="name"
          placeholder="name"
          className={c.input}
          required
        />
        <ErrorMessage name="name" component="span" className={c.error} />
        <label className="" htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          placeholder="email"
          id={emailFieldId}
          className={c.input}
          required
        />
        <ErrorMessage name="name" component="span" className={c.error} />
        <label className="" htmlFor={passFielfId}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          placeholder="password"
          id={passFielfId}
          className={c.input}
          required
        />
        <ErrorMessage name="name" component="span" className={c.error} />

        <Link to="/login">Already have account? Lets login!</Link>

        <div className="">
          <button type="submit" className={c.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
