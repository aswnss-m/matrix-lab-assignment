import React from 'react'
import Card from '../Components/Card'
import "./Results.css";
import SearchBar from '../Components/SearchBar';

function TokenSearch() {
  return (
   <>
    <SearchBar props = {{
      type : 'token',
      placeholder : 'Search Token Address'
    }}/>
    <div className='results'>
        <h1 className='resultsTitle'>Token Search Results</h1>
        <div className='resultsCards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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

export default TokenSearch