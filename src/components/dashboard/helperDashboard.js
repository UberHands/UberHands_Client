import React, {
  useState,
  useEffect
} from 'react';

import './helperDashboard.css';
import './loadPage.css';
import LoadPage from './loadPage';

function HelperDashboard() {

  const [isloading, setLoading] = useState(true);
  useEffect(()=>{
    if(isloading) {
      setTimeout(()=>{
        setLoading(false)
      }, 0);
    }
  }, [isloading])

  return (
    <div>
      {isloading? <LoadPage/>:(
        <div>
          <div className = "heading">
            <h1>Available Jobs Near You</h1>
          </div>
          <div className = "card">
          </div>
        </div>
      )}
    </div>
  );
}

export default HelperDashboard;
