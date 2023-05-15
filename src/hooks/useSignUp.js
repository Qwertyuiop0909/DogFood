import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../api/api'
import { useSignIn } from './useSignIn'

export const useSignUp = () => {
  const navigate = useNavigate()
  const { mutate: initUser } = useSignIn()

  useEffect(() => {
    const signInData = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
    }
    console.log(signInData)
    if (signInData.email && signInData.password) {
      initUser(signInData)
      navigate('/goods')
    }
  }, [])

  const { mutate } = useMutation({
    mutationFn: (data) => API.signUp(data),
    onSuccess: () => navigate('/users/init'),
  })

  return {
    mutate,
  }
}
