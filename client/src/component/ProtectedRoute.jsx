import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRoute({children}) {
    const token = localStorage.getItem('admintoken');
if(!token){
    return <Navigate to='/admin/login' replace></Navigate>
}

  return (
    children
  )
}

export default ProtectedRoute
