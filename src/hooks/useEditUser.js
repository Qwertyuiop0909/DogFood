import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { API } from '../api/api'

export const useEditUser = () => {
  const navigate = useNavigate()
  const { mutate: editUserData } = useMutation({
    mutationFn: (id, data) => API.editUserData(id, data),
    onSettled: (newUser) => {
      navigate(`/user/${newUser.id}`)
    },
  })
  const { mutate: editUserAvatar } = useMutation({
    mutationFn: (id, data) => API.editUserAvatar(id, data),
    onSuccess: (newUser) => {
      navigate(`/user/${newUser.id}`)
    },
  })
  return {
    editUserData,
    editUserAvatar,
  }
}
