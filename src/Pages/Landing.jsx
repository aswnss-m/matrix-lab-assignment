import React from 'react'
import Sidebar from '../Components/Sidebar'
import Results from './Results'
import SearchBar from '../Components/SearchBar';
import "./Landing.css";

function Landing() {
  return (
    <div className='landingPage'>
        <Sidebar/>
        <SearchBar/>
        <Results />
    </div>
  )
}

export default Landing