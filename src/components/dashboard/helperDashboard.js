import React, {
  useState,
  useEffect
} from 'react';
import useInterval from 'use-interval';

import { Dialog } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

import './helperDashboard.css';
import './loadPage.css';
import LoadPage from './loadPage';

function HelperDashboard() {
  const [isloading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hid, setHid] = useState(0)
  const timer = React.useRef();

  const jobs = [
    {
      title: "Dog Sitting",
      img: "img/dog.jpeg",
      startsin: "20 minutes",
      duration: "30 minutes",
      price: "80",
      dist: "3"
    },{
      title: "Gardening",
      img: "img/Gardening.jpg",
      startsin: "Tomm, 2pm",
      duration: "60 minutes",
      price: "150",
      dist: "1"
    },{
      title: "Grocery Shopping",
      img: "img/grocery.jpg",
      startsin: "20 minutes",
      duration: "60 minutes",
      price: "120",
      dist: "3"
    },{
      title: "Party Preparation",
      img: "img/party.jpg",
      startsin: "2 hours",
      duration: "3 hours",
      price: "250",
      dist: "0.8"
    },{
      title: "Driving",
      img: "img/driving.jpg",
      startsin: "Thrus, 4pm",
      duration: "2 days",
      price: "1500",
      dist: "0.5"
    },{
      title: "Cleaning House",
      img: "img/cleaning.jpg",
      startsin: "Today 5pm",
      duration: "2 hours",
      price: "100",
      dist: "0.2"
    },{
      title: "Takecare of Shop",
      img: "img/shop.jpg",
      startsin: "40 minutes",
      duration: "3 hours",
      price: "300",
      dist: "5"
    },{
      title: "Tourist Guide",
      img: "img/tourist.jpg",
      startsin: "Evening 5pm",
      duration: "4 Days",
      price: "2000",
      dist: "1.5"
    }
  ]

  useEffect(()=>{
    if(isloading && !success) {
      setTimeout(()=>{
        setLoading(false)
      }, 1500);
    }
  }, [isloading])

  useInterval(()=>{
    var ele = document.querySelector(`.all-jobs-container > .profiles > div:nth-child(${hid+1})`)
    if(!isloading){
      if(ele){
        ele.classList.toggle('zeroscale')
        setHid(hid + 1)
      }else{
        setHid(-1)
      }
    }
  }, hid > -1 ? 400: null)

  const handleClick = () => {
    setOpen(true);
    setSuccess(true);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="all-jobs-container">
      {isloading? (
        <div class="spinner"></div>
      ):(
        <>
          <div className="jobs-heading">
            <h1>Available Jobs Near You</h1>
          </div>
          <div className="profiles">
            {!success && jobs.map((job, i)=>{
              return (
                <div className="card zeroscale">
                  <div className="lcolumn">
                    <img src={job.img}></img>
                  </div>
                  <div className="rcolumn">
                    <h1>{job.title}</h1>
                      <div className="jobdetails">
                        <div className="rowdetails">
                          <div className="col1">
                            <i className='far fa-calendar-alt'></i><p>{job.startsin}</p>
                          </div>
                          <div className="col2">
                            <i className='fas fa-clock'></i><p>{job.duration}</p>
                          </div>
                        </div>
                        <div className = "rowdetails">
                          <div className = "col1">
                            <i className='fa fa-rupee'></i><p>{job.price}</p>
                          </div>
                          <div className = "col2">
                            <i className='fas fa-map-marker'></i><p>{job.dist} km</p>
                          </div>
                        </div>
                      </div>
                      <button onClick = {handleClick}>PICK THIS JOB</button>
                  </div>
                </div>
              )
            })}
            {success && (
              <Dialog className=""
                maxWidth="sm"
                open={true}>
                <div className="flex items-center p-8">
                  <TaskIcon color="primary" fontSize="large"/>
                  <div className="flex text-xl ml-4 text-green-800">
                    You have been Assigned to this Job &nbsp; &nbsp;<a className="underline">🔗 Map</a>
                  </div>
                </div>
              </Dialog>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default HelperDashboard;
