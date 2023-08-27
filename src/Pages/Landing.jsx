import React from 'react'
import Sidebar from '../Components/Sidebar'
import TokenSearch from './TokenSearch'
import PairAddress from './PairAddress';
import "./Landing.css";
import { Routes, Route } from 'react-router-dom';

function Landing() {
  return (
    <div className='landingPage'>
        <Sidebar/>
        <Routes>
            <Route path={'/'} element={<TokenSearch />}/>
            <Route path={'/token'} element={<TokenSearch />}/>
            <Route path={'/pair'} element={<PairAddress />}/>
        </Routes>
        <div className="foooter"></div>
    </div>
  )
}

export default Landing