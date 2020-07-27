import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function Navigation() {
  return <div style={{backgroundColor: 'blue'}}>
    <nav>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            Favorites
          </Link>
        </li>
        <li>
          <Link to='/container'>
            Container
          </Link>
        </li>
      </nav>
  </div>
}

export default Navigation