/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useSignIn } from '../../hooks/useSignIn'
import { Portal } from '../Portal/Portal'
import styles from './styles.module.css'

export function ModalLogIn() {
  const [initData, setInitData] = useState({ email: '', password: '' })
  const { mutate: initUser } = useSignIn()
  const navigate = useNavigate()

  return (
    <Portal>
      <div className={` card ${styles.myModal}`}>
        <div className={styles.modalContainer}>
          <h2>Войдите</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            initUser(initData)
            localStorage.setItem('email', initData.email)
            localStorage.setItem('password', initData.password)
            navigate('../goods')
          }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={initData.email}
                onChange={(e) => setInitData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={initData.password}
                onChange={(e) => setInitData((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

          </form>
        </div>
      </div>
    </Portal>
  )
}
