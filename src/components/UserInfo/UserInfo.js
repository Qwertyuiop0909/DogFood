import { useNavigate } from 'react-router'
import styles from './styles.module.css'
import avatar from './avatar.png'

export function UserInfo({ user }) {
  const navigate = useNavigate()

  return (
    <div className={styles.user__container}>
      <div className={`card ${styles.mycard}`}>
        <div className={styles.card__header}>
          <img src={avatar} className={styles.img__avatar} alt="user" />
          <div className={styles.about}>
            <h1>{`${user.name}`}</h1>
            <p>{user.about}</p>
          </div>
        </div>
        <button
          type="button"
          className={`btn btn-primary ${styles.editbutton}`}
          onClick={(e) => {
            e.preventDefault()

            navigate(`/users/${user.id}/edit`)
          }}
        >
          Edit

        </button>
      </div>
    </div>
  )
}
