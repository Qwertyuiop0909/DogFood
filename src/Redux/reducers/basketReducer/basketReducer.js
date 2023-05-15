/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable default-param-last */
import {
  ADD_PRODUCK_TO_BASKET,
  CHECKBOX_ALL_CHANGE,
  CHECKBOX_CHANGE,
  CLEAR_BASKET,
  DECREASE_AMMOUTH,
  INCREASE_AMMOUTH,
  REMOVE_PRODUCT_FROM_BASKET,
} from '../../types/basketTypes'

export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCK_TO_BASKET:
      if (state.find((elem) => elem._id === action.payload._id)) {
        alert('Товар уже добавлен в корзину')
        return state
      }
      if (!action.payload.available) {
        alert('Товара нет в наличии')
        return state
      }
      return [
        ...state,
        {
          ...action.payload,
          basketAmmouth: 1,
          choosen: true,
        },
      ]

    case REMOVE_PRODUCT_FROM_BASKET:
      return state.filter((elem) => elem._id !== action.payload)

    case CLEAR_BASKET:
      return []

    case INCREASE_AMMOUTH:
      return state.map((elem) => {
        if (elem._id === action.payload) {
          return {
            ...elem,
            basketAmmouth: elem.basketAmmouth !== elem.stock
              ? elem.basketAmmouth + 1 : elem.stock,
          }
        }
        return elem
      })

    case DECREASE_AMMOUTH:
      return state.map((elem) => {
        if (elem._id === action.payload) {
          return {
            ...elem,
            basketAmmouth: elem.basketAmmouth !== 1
              ? elem.basketAmmouth - 1 : 1,
          }
        }
        return elem
      })

    case CHECKBOX_CHANGE:
      return state.map((elem) => {
        if (elem._id === action.payload) {
          return {
            ...elem,
            choosen: !elem.choosen,
          }
        }
        return elem
      })

    case CHECKBOX_ALL_CHANGE:
      return state.map((elem) => ({
        ...elem,
        choosen: action.payload,
      }))

    default:
      return state
  }
}
