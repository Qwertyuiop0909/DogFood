/* eslint-disable no-alert */
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { addToBasketAC } from '../../Redux/actionCreators/basketAC'

export const Good = ({ good }) => {
  const dispatch = useDispatch()
  return (
    <div id={good.id} className={`card ${styles.myCard}`}>
      <div className={`${styles.picture}`}>
        <img src={good.pictures} className="card-img-top" alt="good" />
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
          <button type="button" className="btn btn-primary" onClick={() => dispatch(addToBasketAC(good))}>В Корзину</button>
        </div>
        <div>
          { good.available ? <br /> : <div>Товара нет в наличии</div>}
        </div>

      </div>
    </div>
  )
}
