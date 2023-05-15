/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import { Search } from '../Search/Search'

export const Header = () => {
  const [user, setUser] = useState({})
  const basket = useSelector((store) => store.basket)
  console.log(basket)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [localStorage])
  console.log(user)

  return (
    <header>
      <div className={styles.icon__container}>
        <Link to={`${user?.token ? '/goods' : '/init'}`}>
          <i className="fa-brands fa-ethereum" />
        </Link>
      </div>
      <Search />
      <nav>
        <Link to="/">
          <i className="fa-solid fa-heart" id="featured" />
          <label htmlFor="featured">Избранное</label>
        </Link>
        <Link to="/goods/basket">
          <i className="fa-solid fa-basket-shopping" id="basket" />
          <label htmlFor="basket">Корзина</label>
          <div className={styles.basketCounter}>{basket?.length}</div>
        </Link>
        <Link to={`${user?.token ? `/users/${user?.id}` : '/init'}`}>
          <i className="fa-solid fa-user" id="user" />
          <label htmlFor="user">{`${user?.token ? 'Профиль' : 'Войти'}`}</label>
        </Link>
      </nav>
    </header>
  )
}
