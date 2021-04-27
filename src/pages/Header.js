import React from 'react'
import {Link} from 'react-router-dom'



const Header = (props) => {
    return(
        <>
         <Link to={`/`}>
            <h2>Home</h2>
          </Link>
          <Link to='/stocks'>
              <h2>Stocks</h2>
          </Link>
          <Link to='/about'>
              <h2>about</h2>
          </Link>


        </>
    )
}
export default Header