import React from 'react'
import Card from '../Components/Card'
import "./Results.css";

function PairAddress() {
  return (
    <div className='results'>
        <h1 className='resultsTitle'>Pair Search Results</h1>
        <div className='resultsCards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            
        </div>
    </div>
  )
}

export default PairAddress