import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/auth";

export default () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
    return(
        <div>
          <div>{auth.user && `Welcome! ${auth.user}`} Profile</div>
          <nav>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </div>
    )
}

