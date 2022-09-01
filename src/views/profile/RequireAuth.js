import React from "react"
import { Navigate, useLocation} from "react-router-dom"
import { useAuth } from "../../context/auth"

/*
/profile 접근시, 로그인 상태를 확인하는 wrapper component
로그인이 되었다면, children, 즉 /profile을 랜더링해주고
비로그인 상태라면, /login 으로 redirect 시킨다 
*/

export default ({children}) => {
  const location = useLocation()
  const auth = useAuth()
  if(!auth.user) return <Navigate to='/login' state={{path: location.pathname}}/>
  else return children
}