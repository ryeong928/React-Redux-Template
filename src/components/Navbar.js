import { Link, NavLink } from 'react-router-dom'

export default () => {
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none'
    }
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink style={navLinkStyles} to="/about">About</NavLink>
      <NavLink style={navLinkStyles} to="/product">Product</NavLink>
      <NavLink style={navLinkStyles} to="/user">User</NavLink>
    </nav>
  )
}