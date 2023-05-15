import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { API } from '../api/api'
import { ALL_PRODUCTS_QUERY_KEY } from '../helpers/constants'

export const useSearchProducts = () => {
  const filters = useSelector((store) => store.searchFilters).searchFilters
  const {
    data, isLoading, isError, isSuccess, error, refetch,
  } = useQuery({
    queryKey: [ALL_PRODUCTS_QUERY_KEY, filters],
    queryFn: () => API.getProductsWithFilters(filters),
  })
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
    filters,
  }
}
