import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth"

export default () => {
  const navProps = useLocation().state
  const navigate = useNavigate()
  const auth = useAuth()
  const [user, setUser] = useState('')
  const handleLogin = () => {
      auth.login(user)
      navigate('/profile', {replace: true}) // 로그인상태에서, 뒤로가기로 login 페이지가 보이지 않도록 replace true
  }
  return(
    <div>
      <label>
          Username: {' '}
          <input type='text' onChange={e => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}