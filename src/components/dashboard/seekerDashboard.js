import React, {useState, useEffect} from 'react';
import './seekerDashboard.scss';

const FormContainer = ()=>{
  const default_jobs = [{
      "name": "Babysitter",
      "img": "babysitter.png"
    },{
      "name": "Dog sitting",
      "img": "dog.png"
    },{
      "name": "Driving",
      "img": "driving.jpg"
    },{
      "name": "Gardening",
      "img": "garden.jpg"
    },{
      "name": "Shop",
      "img": "shop.jpg"
    },{
      "name": "Shopping",
      "img": "shopping.jpg"
    },{
      "name": "Bag",
      "img": "bag.jpg"
    },{
      "name": "User",
      "img": "user.png"
    }
  ]

  return (
    <div className="job-create-container">
      <div className="float-wrapper">
        {default_jobs.map((job)=>{
          return (
            <div className="default-job">
              <img src={'img/services/' + job.img}/>
              <span>{job.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SeekerDashboard() {
  const [prog, setProg] = useState(0);
  const stages = [
    "Create Task",
    "Choose Helper",
    "Task in progress",
    "Completed"
  ]

  return (
    <div className="seeker-dashboard">
      <div className="progress-container">
        <div className="prog-ribbon">
          <div className="internal-ribbon" style={{
            width: `${(prog/(stages.length-1))*100}%`
          }}></div>
        </div>
        {stages.map((st, i)=>{
          return (
            <div className="prog-box" key={i} data-prev={i<prog} data-curr={i==prog}>
              <div className="prog-circle">{i}</div>
              <span>{st}</span>
            </div>
          )
        })}
      </div>

      {prog == 0 ? <FormContainer/>:null}
    </div>
  );
}

export default SeekerDashboard;
