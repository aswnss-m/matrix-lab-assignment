import React from 'react'
import "./Card.css";
import info from "../Assets/icons/Vector-6.png";
function Card() {
  return (
    <div className='card'>
        <h1>Basic Info</h1>
        <div className='cardInfo'>
            <div className="infoPair">
                <h4>Pair Created At</h4>
                <p>Etherium</p>
            </div>
            <div className="infoPair">
                <h4>Symbols</h4>
                <p>ETH</p>
            </div>
            <div className="infoPair">
                <h4>Dex ID</h4>
                <p>#7890</p>
            </div>
            <div className="infoPair">
                <h4>Pair Address</h4>
                <p>#6543</p>
            </div>
        </div>
        <div className="cardIcon">
            <img src={info} alt="" />
        </div>
    </div>
  )
}

export default Card