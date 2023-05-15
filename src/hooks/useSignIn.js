import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { API } from '../api/api'
import { SIGN_IN_QUERYKEY } from '../helpers/constants'

export const useSignIn = () => {
  const navigate = useNavigate()
  const { mutate, data } = useMutation({
    queryKey: SIGN_IN_QUERYKEY,
    mutationFn: (signInData) => API.signIn(signInData),

    onSuccess: (res) => {
      navigate('/goods')
      localStorage.setItem('user', JSON.stringify(res))
      localStorage.setItem('token', res.token)
    },

    onError: () => {
      navigate('/')
    },
  })

  return {
    data,
    mutate,
  }
}
