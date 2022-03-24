import React, {useState} from 'react';
import './header.css'

import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from 'react-router-dom';

export default function Header(){
  const [dashtext, setDash] = useState("Login/SignUp");

  if(window.location.pathname.substring(1)!=""){
    if(window.location.pathname.includes('userdashboard') && dashtext!="User Dashboard"){
      setDash("User Dashboard");
    }else if (window.location.pathname.includes('helperdash') && dashtext!="Helper Dashboard") {
      setDash("Helper Dashboard");
    }
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <span>
            <Link to="/">Uber Hands</Link>
          </span>
        </div>
        <div className="headNav">
          <div className="navList">
            <span>
              <Link to="/">{dashtext}</Link>
            </span>
            <span>
              <a target="_blank" rel="noreferrer">Github</a>
            </span>
            <span><a href="mailto:sujalmodanwal9@gmail.com" target="_blank" rel="noreferrer">Contact</a></span>

            <span> <Link to="/seekerProfile"> Profile </Link> </span>

          </div>
        </div>
      </div>
    </div>
  )
}
