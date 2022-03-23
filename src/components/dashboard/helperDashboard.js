import React, {
  useState,
  useEffect
} from 'react';

import './helperDashboard.css';

function HelperDashboard() {

  const [curStage, setCurStage] = useState(2);
  const [name, setName] = useState("Sujal")


  return (
    <div>
      <div classname="hero">
        <div classname="hero-inner">
            <div classname="hero-title">
              <h1 classname="text-light title font-2">WELCOME Helper</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HelperDashboard;

// <div className="progress-bar-container">
//   <div className={"progress-bar " + (curStage == 1 ? "first-stage" : curStage == 2 ? "second-stage" : curStage == 3 ? "third-stage" : "")}>
//     <div className="stage-level">
//       <div className="stage-circle"></div>
//       <span className="stage-name" onClick={click}>{name}</span>
//     </div>
//     <div className="stage-level">
//       <div className="stage-circle"></div>
//       <span className="stage-name">Two</span>
//     </div>
//     <div className="stage-level">
//       <div className="stage-circle"></div>
//       <span className="stage-name">Three</span>
//     </div>
//     <div className="stage-level">
//       <div className="stage-circle"></div>
//       <span className="stage-name">Complete</span>
//     </div>
//   </div>
// </div>
