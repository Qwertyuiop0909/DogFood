import { UPDATE_SEARCH_FILTERS } from '../types/searchFiltersTypes'

export const updateSearchFiltersAC = (filters) => ({
  type: UPDATE_SEARCH_FILTERS,
  payload: filters,
})
