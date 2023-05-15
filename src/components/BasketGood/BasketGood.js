/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import {
  checkboxChangeAC, decreaseAmmouthAC, increaseAmmouthAC, removeFromBasketAC,
} from '../../Redux/actionCreators/basketAC'

export const BasketGood = ({ good }) => {
  const dispatch = useDispatch()
  return (
    <div id={good.id} className={`card ${styles.myCard}`}>
      <div className={`${styles.picture__div}`}>
        <img src={good.pictures} className={`${styles.picture}`} alt="good" />
      </div>
      <div className={`${styles.main}`}>
        <div className={`${styles.main__info}`}>
          <h5>{good.name}</h5>
          <div className={`${styles.rate}`}>
            <div id="rating" className={`${styles.rate__rating}`}>
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
            <label htmlFor="rating">{`${good.reviews.length} отзывов`}</label>
          </div>
        </div>
        <hr />
        <div className={`${styles.details}`}>
          {good.discount ? (
            <>
              <span className={`${styles.discount}`}>{good.price}</span>
              <span>
                {' '}
                -
                {good.discount}
                %
              </span>
            </>
          ) : <br />}
          <h5>{(good.price * (100 - good.discount)) / 100}</h5>
          <div>
            <span>
              Колличество:
              {' '}
              <span>{good.basketAmmouth}</span>
              {' '}
              /
              {' '}
              {good.stock}
            </span>
            <br />
            <button type="button" className="btn btn-primary" onClick={() => dispatch(increaseAmmouthAC(good._id))}>+</button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(decreaseAmmouthAC(good._id))}>-</button>
          </div>
          <hr />
          <button type="button" className="btn btn-primary" onClick={() => dispatch(removeFromBasketAC(good._id))}>
            <i className="fa-solid fa-trash" />
          </button>
        </div>

      </div>
      <div>
        { good.available ? <br /> : <div>Товара нет в наличии</div>}
      </div>
      <input className={styles.check} type="checkbox" checked={good.choosen} onClick={() => dispatch(checkboxChangeAC(good._id))} />
    </div>
  )
}
