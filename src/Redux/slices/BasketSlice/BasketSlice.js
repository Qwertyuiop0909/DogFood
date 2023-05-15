/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initState = []

export const BasketSlice = createSlice({
  name: 'BasketSlice',
  initState,
  reducers: {
    addToBasket: (state, action) => {
      if (state.find((elem) => elem._id === action.payload._id)) {
        alert('Товар уже добавлен в корзину')
        return state
      }
      if (!action.payload.available) {
        alert('Товара нет в наличии')
        return state
      }
      state.push({
        ...action.payload,
        basketAmmouth: 1,
        choosen: true,
      })
    },
    remooveFromBasket: (state, action) => state.filter((elem) => elem._id !== action.payload),
    clearBasket: () => [],
    increaseAmmouth: (state, action) => {
      state
        .find((elem) => elem._id === action.payload)
        .basketAmmouth = this.basketAmmouth !== this.stock
          ? this.basketAmmouth + 1 : this.stock
    },
    decreaseAmmouth: (state, action) => {
      state
        .find((elem) => elem._id === action.payload)
        .basketAmmouth = this.basketAmmouth !== 1
          ? this.basketAmmouth - 1 : 1
    },
    checkboxChange: (state, action) => state.map((elem) => {
      if (elem._id === action.payload) {
        return {
          ...elem,
          choosen: !elem.choosen,
        }
      }
      return elem
    }),
    checkboxAllChange: (state, action) => state.map((elem) => ({
      ...elem,
      choosen: action.payload,
    })),
  },
})

export const {
  addToBasket,
  remooveFromBasket,
  clearBasket,
  increaseAmmouth,
  decreaseAmmouth,
  checkboxChange,
  checkboxAllChange,
} = BasketSlice.actions

export const BasketReducer = BasketSlice.reducer
