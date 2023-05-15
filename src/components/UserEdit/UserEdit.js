import { Form, Formik, Field } from 'formik'
import styles from './styles.module.css'
import avatar1 from './avatar.png'

export function UserEdit() {
  const user = JSON.parse(localStorage.getItem('user'))

  const {
    id, email, group, __v, ...initialValues
  } = user.data

  // const submitEdit = async ({name, about, avatar}) => {
  //     const pictureResponce = {}

  //     if (signInData['email'] && signInData['password']){

  //         initUser(signInData)
  //         navigate(`/users/${user['id']}/`)
  //     }
  // }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
        // editUser(user.id, values)
      }}
    >
      <Form className={styles.editForm}>
        <div className={styles.user__container}>
          <div className={`card ${styles.mycard}`}>
            <div className={styles.card__header}>
              <img src={avatar1} className={styles.img__avatar} alt="user" />
              <Field name="avatar" type="textarea" placeholder={user.name} />
              <div className={styles.about}>
                <Field name="name" type="text" placeholder={user.name} />
                <Field name="about" type="textarea" placeholder={user.name} />
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.editbutton}`}
            >
              Save

            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
