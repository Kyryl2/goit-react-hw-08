import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import c from "./LoginForm.module.css";
const LoginForm = () => {
  const emailFieldId = nanoid();
  const passFielfId = nanoid();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={c.form}>
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
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
