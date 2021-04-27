import React from 'react'
import {Link} from 'react-router-dom'
import stocks from '../components/stocksData'

const Stocks = (props) => {



  return (
    <div className="stocks">
      {stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
}
export default Stocks