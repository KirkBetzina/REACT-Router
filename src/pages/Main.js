import React from 'react'
import Stocks from './Stocks'
import {Route,Switch} from 'react-router-dom'
import Price from './Price'

const Main = (props) => {
    return (
        <div  className='main'>
            
            <h1>This is the Main Component</h1>
            <Switch>
                <Route path='/stocks/:symbol'
                    render={(routerProps) => <Price {...routerProps} />}
                    />
            
  
                <Route exact path ='/'>
                    <Stocks />
                </Route>

                <Route path='/about'>
                    <h1>About</h1>
                </Route>
                <Route path='/stocks'>
                    <h1>Stocks</h1>
                </Route>

      
              
             
            </Switch>
            
        </div>
    )
}
export default Main