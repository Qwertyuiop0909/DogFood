import {
  ADD_PRODUCK_TO_BASKET,
  CHECKBOX_ALL_CHANGE,
  CHECKBOX_CHANGE,
  CLEAR_BASKET,
  DECREASE_AMMOUTH,
  INCREASE_AMMOUTH,
  REMOVE_PRODUCT_FROM_BASKET,
} from '../types/basketTypes'

export const addToBasketAC = (good) => ({
  type: ADD_PRODUCK_TO_BASKET,
  payload: good,
})

export const removeFromBasketAC = (id) => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  payload: id,
})

export const clearBasketAC = () => ({
  type: CLEAR_BASKET,
})

export const increaseAmmouthAC = (id) => ({
  type: INCREASE_AMMOUTH,
  payload: id,
})

export const decreaseAmmouthAC = (id) => ({
  type: DECREASE_AMMOUTH,
  payload: id,
})

export const checkboxChangeAC = (id) => ({
  type: CHECKBOX_CHANGE,
  payload: id,
})

export const checkboxAllChangeAC = (bool) => ({
  type: CHECKBOX_ALL_CHANGE,
  payload: bool,
})
