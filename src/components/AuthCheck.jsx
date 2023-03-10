import { useAuth } from '@/hooks'
import { Navigate } from 'react-router-dom'

const AuthCheck = ({ children }) => {
  const { isAuth } = useAuth()
  return isAuth ? <>{children}</> : <Navigate to='/login' replace />
}

export default AuthCheck
