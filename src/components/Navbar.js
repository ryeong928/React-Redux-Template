import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth'

export default () => {
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none'
    }
  }
  const auth = useAuth()
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink style={navLinkStyles} to="/about">About</NavLink>
      <NavLink style={navLinkStyles} to="/product">Product</NavLink>
      <NavLink style={navLinkStyles} to="/user">User</NavLink>
      <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
      {!auth.user && (<NavLink style={navLinkStyles} to='login'>Login</NavLink>)}
    </nav>
  )
}