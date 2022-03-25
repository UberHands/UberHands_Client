import React, {
  useState,
  useEffect
} from 'react';

import './helperDashboard.css';
import './loadPage.css';
import LoadPage from './loadPage';

function HelperDashboard() {

  const [isloading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  useEffect(()=>{
    if(isloading) {
      setTimeout(()=>{
        setLoading(false)
      }, 3000);
    }
  }, [isloading])

  const handleClick = () => {
    setOpen(true);
    setSuccess(false);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {isloading? (
        <div class="spinner"></div>
      ):(
        <div>
          <div className = "heading">
            <h1>Available Jobs Near You</h1>
          </div>
          <div className = "profiles">
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/dog.jpeg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Dog Sitting</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p>20 minutes</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>30 minutes</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>80</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>3 km</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/Gardening.jpg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Gardening</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p> Tomm 2pm</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>60 minutes</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>150</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>1 km</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/grocery.jpg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Grocery Shopping</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p>20 minutes</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>60 minutes</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>120</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>3 km</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/driving.jpg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Driving</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p>Thurs 4pm</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>2 Days</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>1500</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>500 m</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/cleaning.jpg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Cleaning House</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p>Today 5pm</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>2 Hours</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>100</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>200 m</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
            <div className = "card">
              <div className = "lcolumn">
                  <img src = "img/shop.jpg"></img>
              </div>
              <div className = "rcolumn">
                <h1>Takecare of Shop</h1>
                  <div className = "jobdetails">
                    <div className = "rowdetails">
                      <div className="col1">
                        <i className='far fa-calendar-alt'></i><p>40 minutes</p>
                      </div>
                      <div className="col2">
                        <i className='fas fa-clock'></i><p>3 hours</p>
                      </div>
                    </div>
                    <div className = "rowdetails">
                      <div className = "col1">
                        <i className='fa fa-rupee'></i><p>300</p>
                      </div>
                      <div className = "col2">
                        <i className='fas fa-map-marker'></i><p>5 km</p>
                      </div>
                    </div>
                  </div>
                    <button onClick = {handleClick}>Pick This Job!</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelperDashboard;
