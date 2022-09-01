import React from "react";
import { Link, useSearchParams } from 'react-router-dom'

export default () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUser = searchParams.get('filter') === 'active'

    return(
        <div>
          <div>User</div>
          <nav>
            <Link to="admin">Admin</Link>
            <Link to="1">User 1</Link>
            <Link to="2">User 2</Link>
            <Link to="3">User 3</Link>
          </nav>
          <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active</button>
            <button onClick={() => setSearchParams({})}>reset</button>
          </div>
          {showActiveUser ? <h2>show active users</h2> : <h2>show all users</h2>}
        </div>
    )
}

