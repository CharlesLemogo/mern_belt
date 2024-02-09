import React from 'react'
import { Link} from "react-router-dom";

const Start = () => {
  return (
    <div>
    <h1>Welcome To Speedy Meals</h1>
    <Link to="/meals">Click Here To See Our Services</Link>
    </div>
  )
}

export default Start