import React, {
  useState,
  useEffect
} from 'react';

import './seekerDashboard.css';

<<<<<<< HEAD
const JobForm = () => {
  return (
    <div>
      Hey
    </div>
  );
}

function SeekerDashboard() {

  const images = ["babysitter.png", "dog.png", "driving.jpg", "garden.jpg", "shop.jpg", "shopping.jpg", "bag.jpg", "user.png"];
  const names = ["Babysitter", "Dog", "Driving", "Gardening", "Shop", "Shopping", "Bag", "User"];

  const [curStage, setCurStage] = useState(2);
  var [customName, setCustomName] = useState("Custom Job");
  var [isClicked, setIsClicked] = useState(0);
=======
function SeekerDashboard() {

  const [curStage, setCurStage] = useState(2);
>>>>>>> 5dc8d64993319a031d3af1d94cb984584499bae5

  return (
    <div>
      <div className="progress-bar-container">
        <div className={"progress-bar " + (curStage == 1 ? "first-stage" : curStage == 2 ? "second-stage" : curStage == 3 ? "third-stage" : "")}>
          <div className="stage-level">
            <div className="stage-circle"></div>
            <span className="stage-name">One</span>
          </div>
          <div className="stage-level">
            <div className="stage-circle"></div>
            <span className="stage-name">Two</span>
          </div>
          <div className="stage-level">
            <div className="stage-circle"></div>
            <span className="stage-name">Three</span>
          </div>
          <div className="stage-level">
            <div className="stage-circle"></div>
            <span className="stage-name">Complete</span>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="jobs-outer-container">
        <div className="jobs-container">
          {[...Array(8)].map((x, i) => {
            return (
              <div className="popular-job-container">
                <img src={"./img/services/" + images[i]}/>
                <span>{names[i]}</span>
              </div>
            )
          })}
          <div className="custom-job-container">
            <img src={"./img/services/customJob.png"}/>
            <span onClick={() => {
              setCustomName(customName == "Custom No Job" ? "Custom Job" : "Custom No Job");
              setIsClicked(!isClicked);
            }}>{customName}
            </span>
          </div>
        </div>

        {isClicked ? <JobForm/> : null};

      </div>

      <div className="helpers-container">

      </div>

=======
>>>>>>> 5dc8d64993319a031d3af1d94cb984584499bae5
    </div>
  );
}

export default SeekerDashboard;