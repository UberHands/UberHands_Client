import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import SeekerDashboard from './components/dashboard/seekerDashboard';
<<<<<<< HEAD
=======
import HelperDashboard from './components/dashboard/helperDashboard';
>>>>>>> 5dc8d64993319a031d3af1d94cb984584499bae5
import Helpsearch from './components/searchpage/helpsearch';
import Helpdash from './components/helpdash/helpdash';
import SeekerProfile from './components/profile/seekerProfile';

// if(process.env.NODE_ENV=="development"){
  // require('dotenv').config()
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component = {App}/>
<<<<<<< HEAD
          <Route exact path='/seekerdashboard' component = {SeekerDashboard}/>
=======
          <Route exact path='/userdashboard' component = {SeekerDashboard}/>
>>>>>>> 5dc8d64993319a031d3af1d94cb984584499bae5
          <Route exact path='/userdashboard/search' component = {Helpsearch}/>
          <Route exact path='/helperdash' component = {Helpdash}/>
          <Route exact path='/helperdashboard' component = {HelperDashboard}/>
          <Route exact path='/seekerProfile' component = {SeekerProfile}/>
          {/* <Route component={App} /> */}
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();