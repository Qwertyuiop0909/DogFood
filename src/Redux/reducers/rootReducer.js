import { combineReducers } from 'redux'
import { searchFiltersReducer } from './searchFiltersReducer.js/searchFiltersReducer'
import { basketReducer } from './basketReducer/basketReducer'

export const rootReducer = combineReducers({
  searchFilters: searchFiltersReducer,
  basket: basketReducer,
})
