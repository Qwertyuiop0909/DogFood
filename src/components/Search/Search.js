import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import { updateSearchFiltersAC } from '../../Redux/actionCreators/searchFiltersAC'

export function Search() {
  const [params, setParams] = useSearchParams({})
  const [input, setInput] = useState(() => params.get('search') ?? '')
  const debounceValue = useDebounce(input)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setParams(input ? { search: input } : {})
  }, [input])

  useEffect(() => {
    dispatch(updateSearchFiltersAC(input))
  }, [debounceValue])

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control"
        value={input}
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => navigate('/goods/')}
      />
    </form>
  )
}
