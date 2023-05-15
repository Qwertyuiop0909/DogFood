/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initState = {
  value: '',
}

export const SearchFilterSlice = createSlice({
  name: 'SearchFilterSlice',
  initState,
  reducers: {
    updateSearchFilter: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateSearchFilter } = SearchFilterSlice.actions

export const SearchFilterReducer = SearchFilterSlice.reducer
