import React, {
  useState,
  useEffect
} from 'react';

import './seekerDashboard.css';

function SeekerDashboard() {

  const [curStage, setCurStage] = useState(2);

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
    </div>
  );
}

export default SeekerDashboard;