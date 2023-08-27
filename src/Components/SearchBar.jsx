import React,{ useState } from 'react';
import "./SearchBar.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBar({props}) {
    // set the default value of the input
    const [input, setInput] = useState(props.placeholder);
    const nav = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(input);
        if(props.type === 'token'){
            axios.get(` https://api.dexscreener.com/latest/dex/tokens/${input}`)
            .then((response) => {
                nav('/token',{state:{pairs:response.data.pairs}})
            })
            .catch((error) => {
                console.log(error);
            })
        }
        else if(props.type === 'pair'){
            axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${input}`)
            .then((response) => {
                nav('/pair',{state:{pairs:response.data.pairs}})
            })
            .catch((error) => {
                console.log(error);
            })
        }
        else if(input=== props.placeholder){
            alert("Please enter a valid address");
        }
        else{
            alert("Please select a valid option");
        }
    }
   
  return (
    <div className='searchBar'>
            <div className="searchInput" >
                <input type="text" placeholder="Search" id="searchInput" onChange={(e)=>{
                    setInput(e.target.value);
                }} value={input}/>
                <button type='submit' onClick={handleSearch}>
                    <span className='material-symbols-outlined'>search</span>
                </button>
            </div>
            <button className='walletButton'>Connect</button>
    </div>
  )
}

export default SearchBar