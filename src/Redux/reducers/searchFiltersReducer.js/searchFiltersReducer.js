/* eslint-disable default-param-last */
import { UPDATE_SEARCH_FILTERS } from '../../types/searchFiltersTypes'

export const searchFiltersReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FILTERS:
      return {
        ...state,
        searchFilters: action.payload,
      }

    default:
      return state
  }
}
