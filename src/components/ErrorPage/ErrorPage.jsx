import { Portal } from '../Portal/Portal'
import styles from './errorpage.module.scss'

export const ErrorPage = ({ refetch, error }) => (
  <Portal>
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.message}>
          <h3>Произошла ошибка:</h3>
          <h2>{`${error}`}</h2>
        </div>
        <button type="button" className="btn btn-primary" onClick={refetch}>
          Оправить запрос заного
        </button>
      </div>
    </div>
  </Portal>
)
