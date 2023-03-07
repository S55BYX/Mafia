import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {userAuth} from '../'
import LoginContext from '../loginContext'
import Login from './Login'

const  ProtectedRoute = ({children}) => {
  const {isLoggedIn} = useContext(LoginContext)
  return(
    isLoggedIn ? children : <Login />
  )
}

export default ProtectedRoute