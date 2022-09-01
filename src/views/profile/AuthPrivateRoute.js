import React from "react"
import { Navigate, useLocation} from "react-router-dom"
import { useAuth } from "../../context/auth"

/*
/profile 접근시, 로그인 상태를 확인하는 wrapper component
로그인이 되었다면, children, 즉 /profile을 랜더링해주고
비로그인 상태라면, /login 으로 redirect 시킨다 
*/

export default ({children, roles}) => {
  // roles prop : Private의 roles 속성에 할당한 배열
  const location = useLocation()
  const auth = useAuth()
  const userRole = roles.includes('user') ? true : false // 여기서 'user'는 user state에서 가져오면 된다
  // 비로그인 상태면 로그인 페이지로
  if(!auth.user) return <Navigate to='/login' state={{path: location.pathname}}/>
  // 로그인 상태에서 user role이 admin일 경우
  else if(userRole) return <h2>it's admin page</h2>
  // 로그인 상태에서 user role이 user일 경우
  else return children
}