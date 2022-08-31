import React from "react";
import { Link, Outlet } from 'react-router-dom'

export default () => {
    return(
        <div>
          <div>Product</div>
          <input type="search" placeholder="search product" />
          <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
          </nav>
          <Outlet />
        </div>
    )
}

