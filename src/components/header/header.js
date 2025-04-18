import React, {useState, useEffect} from 'react';
import './header.css'

import DehazeIcon from '@mui/icons-material/Dehaze';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {Link} from 'react-router-dom';

export default function Header(){
  const [dashtext, setDash] = useState("");

  useEffect(()=>{
    if(window.location.pathname.substring(1)!=""){
      if(window.location.pathname.includes('seekerdashboard') && dashtext!="Seeker Dashboard"){
        setDash("Seeker Dashboard");
      }else if (window.location.pathname.includes('helperdash') && dashtext!="Helper Dashboard") {
        setDash("Helper Dashboard");
      }
    }
  }, [dashtext])

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <span>
            <Link to="/">Dolet</Link>
          </span>
        </div>
        <div className="headNav">
          <div className="navList">
            <span>
              <Link to="/">{dashtext}</Link>
            </span>
            <span>
              <a href="https://github.com/UberHands/UberHands_Client" target="_blank" rel="noreferrer">Github</a>
            </span>
            <span><a href="mailto:sujalmodanwal9@gmail.com" target="_blank" rel="noreferrer">Contact</a></span>

            <span> <Link to="/"> Profile </Link> </span>

          </div>
        </div>
      </div>
    </div>
  )
}
