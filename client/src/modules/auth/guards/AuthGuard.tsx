import React, { ReactNode } from 'react'
import { Navigate, redirect } from 'react-router';

const AuthGuard = ({children}: any) => {
  const auth = true;

  if (!auth) return <Navigate to={'/register'}/>;

  return (<>{children}</>);
}

export default AuthGuard