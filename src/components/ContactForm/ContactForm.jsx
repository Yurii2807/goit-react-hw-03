import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

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
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  // const nameFieldId = useId();
  // const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    addNewContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  // const handleSubmit = (values, actions) => {
  //   onAdd({ id: nanoid(), ...values });
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage className={css.ErrorMsg} name="name" component="span" />
        </div>

        <div className={css.field}>
          <label>Number</label>
          <Field type="text" name="number" />
          <ErrorMessage
            className={css.ErrorMsg}
            name="number"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// id={numberFieldId}id={nameFieldId}
//  htmlFor={nameFieldId} htmlFor={numberFieldId}
