/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useSignUp } from '../../hooks/useSignUp'
import styles from './styles.module.css'

export function Index() {
  const { mutate: signUp } = useSignUp()

  return (
    <>
      <h1>Регистрация</h1>
      <Formik
        initialValues={{
          email: '',
          group: '',
          password: '',
        }}
        onSubmit={({ email, group, password }) => {
          signUp({
            email,
            group,
            password,
          })
        }}
      >
        <Form className={styles.signUpForm}>
          <div className={styles.input}>
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            <ErrorMessage className="form-text">We'll never share your email with anyone else.</ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputGroup" className="form-label">Group</label>
            <Field name="group" type="text" className="form-control" id="exampleInputGroup" />
            <ErrorMessage className="form-text">We'll never share your email with anyone else. </ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <Field name="password" type="password" className="form-control" id="exampleInputPassword1" />
            <ErrorMessage className="form-text">We'll never share your email with anyone else. </ErrorMessage>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
