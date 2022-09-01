import React from "react";
import {useNavigate} from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
    return(
        <div>
          <div>Ordered!</div>
          <button onClick={() => {navigate(-1)}}>move back</button>
        </div>
    )
}