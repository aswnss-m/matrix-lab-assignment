import React from 'react'
import Card from '../Components/Card'
import "./Results.css";
import SearchBar from '../Components/SearchBar';
function PairAddress() {
  return (
    <>
    <SearchBar props = {{
      type : 'token',
      placeholder : 'Search Pair Address'
    }}/>
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
</>
  )
}

export default PairAddress