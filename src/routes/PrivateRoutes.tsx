import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando...</div>
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}