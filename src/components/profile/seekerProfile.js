import React, {
  useState,
  useEffect
} from 'react';

import './seeker.css';


function toFloat(val) {
  var decimalVal = String(val - Math.trunc(val));
  var integerVal = String(Math.trunc(val));
  var newVal = integerVal + '.' + decimalVal;
  return newVal;
}

function SeekerProfile() {

  const [helper, setHelper] = useState({
    name : "Kamal",
    email : "kp@gmail.com",
    phone : 1234567890,
    rating : 3,
    numTasks : 4,
    skills : "CPP,Java",
    years : 2,
    address: 'Howrah, West Bengal',
    img : "https://avatars.githubusercontent.com/u/58756653?s=400&u=1c3e5e41bc245ec7550b6660da7a5eeb8e18e750&v=4"
  });

  return (
    <div className = "profile-container" >
      <div className="left-pane">
        <div className="profile-pic">
          <img src={helper.img}/>
          <span className="helper-name">{helper.name}</span>
          <span className="helper-address">{helper.address}</span>
        </div>
        <div className="helper-info">
          <div className="info-container">
            <span className="helper-values">{helper.numTasks}</span>
            <span className="helper-props">Tasks</span>
          </div>
          <div className="info-container">
            <span className="helper-values">{toFloat(helper.rating)} ★</span>
            <span className="helper-props">Ratings</span>
          </div>
          <div className="info-container">
            <span className="helper-values">{helper.years}</span>
            <span className="helper-props">Years</span>
          </div>
        </div>
      </div>
      <div className="right-pane">
        <div className="profile-details">
          <h1>About</h1>

          <div className="details-props">
            <h3> Email </h3>
            <div className="values">{helper.email}</div>
          </div>
          <div className="details-props">
            <h3> Phone </h3>
            <div className="values">{helper.phone}</div>
          </div>
          <div className="details-props">
            <h3> Address </h3>
            <div className="values">{helper.address}</div>
          </div>

          <h1>Skills</h1>

          <div> {helper.skills} </div>

        </div>
      </div>
    </div>
  );
}

export default SeekerProfile;