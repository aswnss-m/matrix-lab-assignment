import React from 'react'
import Card from '../Components/Card'
import "./Results.css";
import SearchBar from '../Components/SearchBar';
import { useLocation } from 'react-router-dom';

function TokenSearch() {
  const nav = useLocation();
  const val = nav.state;
  
  return (
   <>
    <SearchBar props = {{
      type : 'token',
      placeholder : 'Search Token Address'
    }}/>
    <div className='results'>
        <h1 className='resultsTitle'>Token Search Results</h1>
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
                }}>Search the token</h1>
              )
            }     
        </div>
    </div>
    </>
  )
}

export default TokenSearch;
