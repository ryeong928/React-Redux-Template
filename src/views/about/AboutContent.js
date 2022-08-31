import React from "react";
import {useNavigate} from 'react-router-dom'

export default () => {
    const navigate = useNavigate()
    return(
        <div>
          <div>About</div>
          <button onClick={() => {navigate('/order')}}>place order</button>
        </div>
    )
}