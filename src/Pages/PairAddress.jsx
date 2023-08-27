import React from 'react'
import Card from '../Components/Card'
import "./Results.css";
import SearchBar from '../Components/SearchBar';
import { useLocation } from 'react-router-dom';
function PairAddress() {
  const nav = useLocation();
  const val = nav.state;

  return (
    <>
    <SearchBar props = {{
      type : 'pair',
      placeholder : 'Search Pair Address'
    }}/>
    <div className='results'>
        <h1 className='resultsTitle'>Pair Search Results</h1>
        <div className='resultsCards'>
           {
              val ? (
                val.pairs.map((item, index) => (
                  <Card key={index} data={item} /> // Assuming 'item' is an object containing data for the Card
                ))
              ) : (
                <h1 style={{
                  color : 'white',
                  textAlign : 'center',
                  width : '100%',
                }}>Search the Pair</h1>
              )
            }  
        </div>
    </div>
</>
  )
}

export default PairAddress