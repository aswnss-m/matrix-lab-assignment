import React from 'react'
import "./Card.css";
import info from "../Assets/icons/info.png";
import price from "../Assets/icons/price.png";
import symbol from "../Assets/icons/symbol.png";
function Card({data}) {
    const priceConvert = (priceStr)=>{
        const price = parseFloat(priceStr);

        if (isNaN(price)) {
            return "Invalid Price";
        }

        if (price >= 1e9) {
            return (price / 1e9).toFixed(3) + "B";
        } else if (price >= 1e6) {
            return (price / 1e6).toFixed(3) + "mil";
        } else if (price >= 1e3) {
            return (price / 1e3).toFixed(3) + "k";
        } else {
            return price.toFixed(3);
        }
        }
        const formatUSD = (amountStr) => {
            if (!amountStr) {
              return "";
            }
          
            const amount = parseFloat(amountStr.replace(/[^0-9.-]+/g, ""));
          
            if (isNaN(amount)) {
              return "Invalid Amount";
            }
          
            if (amount >= 1e9) {
              return "$" + (amount / 1e9).toFixed(3) + "B";
            } else if (amount >= 1e6) {
              return "$" + (amount / 1e6).toFixed(3) + "M";
            } else if (amount >= 1e3) {
              return "$" + (amount / 1e3).toFixed(3) + "K";
            } else {
              return "$" + amount;
            }
          };
  return (
    <>
    <div className='card'>
        <h1>Basic Info</h1>
        <div className='cardInfo'>
            <div className="infoPair">
                <h4>Pair Created At</h4>
                <p>{data.pairCreatedAt}</p>
            </div>
            <div className="infoPair">
                <h4>Symbols</h4>
                <p>{data.baseToken.symbol}</p>
            </div>
            <div className="infoPair">
                <h4>Dex ID</h4>
                <p>{data.dexId}</p>
            </div>
            <div className="infoPair">
                <h4>Pair Address</h4>
                <p>{data.pairAddress.slice(0,5)}</p>
            </div>
        </div>
        <div className="cardIcon">
            <img src={info} alt="info icon" />
        </div>
    </div>


    <div className='card'>
        <h1>Basic Token</h1>
        <div className='cardInfo'>
            <div className="infoPair">
                <h4>Name</h4>
                <p>{data.baseToken.name}</p>
            </div>
            <div className="infoPair">
                <h4>Symbol</h4>
                <p>{data.baseToken.symbol}</p>
            </div>
            <div className="infoPair">
                <h4>Address</h4>
                <p>{data.baseToken.address.slice(0,5)}</p>
            </div>
        </div>
        <div className="cardIcon">
            <img src={symbol} alt="symbol icon" />
        </div>
    </div>
    <div className='card'>
        <h1>Qoute Token</h1>
        <div className='cardInfo'>
            <div className="infoPair">
                <h4>Name</h4>
                <p>{data.baseToken.name}</p>
            </div>
            <div className="infoPair">
                <h4>Symbol</h4>
                <p>{data.quoteToken.symbol}</p>
            </div>
            <div className="infoPair">
                <h4>Address</h4>
                <p>{data.baseToken.address.slice(0,5)}</p>
            </div>
        </div>
        <div className="cardIcon">
            <img src={symbol} alt="symbol icon" />
        </div>
    </div>
    <div className='card'>
        <h1>Price</h1>
        <div className='cardInfo'>
            <div className="infoPair">
                <h4>Price Native</h4>
                <p>{priceConvert(data.priceNative)}</p>
            </div>
            <div className="infoPair">
                <h4>Price USD</h4>
                <p>{formatUSD(data.priceUsd)}</p>
            </div>
        </div>
        <div className="cardIcon">
            <img src={price} alt="price used" />
        </div>
    </div>
    </>
  )
}

export default Card