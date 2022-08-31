import React from "react";
import { Link, Outlet } from 'react-router-dom'

export default () => {
    return(
        <div>
          <div>User</div>
          <nav>
            <Link to="admin">Admin</Link>
            <Link to="1">User 1</Link>
            <Link to="2">User 2</Link>
            <Link to="3">User 3</Link>
          </nav>
        </div>
    )
}

