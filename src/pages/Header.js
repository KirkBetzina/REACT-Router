import React from 'react'
import {Link} from 'react-router-dom'



const Header = (props) => {
    return(
        <div className='header'>
         <Link to={`/`}>
            <h2>Home</h2>
          </Link>
          <Link to={'/stocks'}>
              <h2>Stonks</h2>
          </Link>
          <Link to='/about'>
              <h2>about</h2>
          </Link>


        </div>
    )
}
export default Header