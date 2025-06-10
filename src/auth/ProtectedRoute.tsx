import { Navigate } from 'react-router-dom'
import { useAuthContext } from './AuthContext'
import type React from 'react'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuthContext()
    return isAuthenticated ? children : <Navigate to="/login" replace />
}
