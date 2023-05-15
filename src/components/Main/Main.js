import { Outlet } from 'react-router'
import styles from './styles.module.css'

export function Main() {
  return (
    <section>
      <div className={styles.main__container}>
        <Outlet />
      </div>
    </section>
  )
}
