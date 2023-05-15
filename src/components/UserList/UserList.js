import { Navigate } from 'react-router'
import { UserInfo } from '../UserInfo/UserInfo'

export function UserList() {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user.data) return <Navigate to={`/users/${user.id}/init`} />

  return (
    <UserInfo user={user.data} />
  )
}
