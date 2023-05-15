import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from './basket.module.scss'
import { BasketGood } from '../BasketGood/BasketGood'
import { getWordByAmmouth } from '../../helpers/functions'
import { checkboxAllChangeAC, clearBasketAC } from '../../Redux/actionCreators/basketAC'

export const Basket = () => {
  const data = useSelector((store) => store.basket)
  const dispatch = useDispatch()
  const [isAllChecked, setIsAllChecked] = useState(true)

  useEffect(() => {
    dispatch(checkboxAllChangeAC(isAllChecked))
  }, [isAllChecked])
  return (
    <div>
      <h2>
        В корзине
        {' '}
        {data?.length}
        {' '}
        {getWordByAmmouth(data?.length)}
        .
      </h2>
      <div>
        Выбрать все:
        {' '}
        <input type="checkbox" checked={isAllChecked} onClick={() => setIsAllChecked(!isAllChecked)} />
      </div>
      <div className={styles.goods}>
        {data?.filter((elem) => elem.isPublished)
          ?.map((good) => <BasketGood key={good.id} good={good} />)}
      </div>
      <div className="card">
        Итого:
        {' '}
        {data.reduce((acc, prev) => (prev.choosen ? acc + prev.basketAmmouth : acc), 0)}
        {' '}
        Сумма:
        {' '}
        {data.reduce((acc, prev) => (prev.choosen ? (acc + prev.basketAmmouth
        * ((prev.price * (100 - prev.discount)) / 100)) : acc), 0)}
        {' '}
        <button type="button" className="btn btn-primary" onClick={() => dispatch(clearBasketAC())}>
          Очистить
        </button>
      </div>
    </div>
  )
}
