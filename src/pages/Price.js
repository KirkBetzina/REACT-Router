import React from 'react'
import {useState, useEffect} from "react";
import StocksData from '../components/stocksData.js'
const Price = (props) => {
    console.log(props)
    const apiKey = '7309f954e64518ac9405d09bd88536c3'

    const symbol = props.match.params.symbol
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

    const [stock, setStock] = useState(null)
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data-index',data[0])
    setStock(data[0]);
  };
  useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div>
      <h1>{stock.price}</h1>
        <h1>{props.match.params.symbol}</h1>
      </div>
    )
  }
  const loading = () => {
    return(
      <h1>loading...</h1>
    )
  }

  return stock ? loaded() : loading();


    // .filter function happens here
//    return(
//        <>
//     {/* need to do a .filter stocksData, find the object that matches props.match.params.symbol */}
//         <h1>{stock}</h1>
//         <h1>{props.match.params.symbol}</h1>

//        </>
//    )



}
export default Price 