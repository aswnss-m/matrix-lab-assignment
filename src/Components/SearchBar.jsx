import React,{ useState, useEffect } from 'react';
import "./SearchBar.css";

function SearchBar() {
    // set the default value of the input
    const [input, setInput] = useState('Search');
    
  return (
    <div className='searchBar'>
            <div className="searchInput">
                <input type="text" placeholder="Search" onChange={(e)=>{
                    setInput(e.target.value);
                }} value={input}/>
                <button type='submit'>
                    <span className='material-symbols-outlined'>search</span>
                </button>
            </div>
            <button className='walletButton'>Connect</button>
    </div>
  )
}

export default SearchBar