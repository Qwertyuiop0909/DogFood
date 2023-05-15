import { ErrorPage } from '../components/ErrorPage/ErrorPage'
import { Loader } from '../components/Loader/Loader'

export const withQueryReactions = (WrappedComponent) => ({
  isLoading, isError, error, refetch, ...rest
}) => {
  console.log(rest)
  if (isLoading) return <Loader />
  if (isError) return <ErrorPage refetch={refetch} error={error} />
  return <WrappedComponent {...rest} />
}
