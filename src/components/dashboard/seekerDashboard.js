import React, {useState, useEffect} from 'react'
import useInterval from 'use-interval';
import {
  Container,
  Grid,
  TextField,
  Dialog,
  Select,
  MenuItem,
  Link,
  Rating,
  Typography,
  InputAdornment
} from '@mui/material';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import dfdata from './data/helpers.json';
import './seekerDashboard.scss';

const pairit = (x) => {
  if (x<10) return "0"+x
  return x
}

const formatTime = (t) => {
  var tstring = ""
  if(t>=3600) tstring += pairit(Math.floor(t/3600))+":"

  t %= 3600
  tstring += pairit(Math.floor(t/60))+":"
  t %= 60
  tstring += pairit(t)
  return tstring
}

const pseudoN = (key) => {
  var val = 0
  for (var i = 0; i < key.length; i++) {
    val += key[i].charCodeAt()/(i+2)
  }
  return val
}

const geneStar = (val)=>{
  var stars = val%12
  stars = Math.round(stars*5)/10
  stars = `${1 + stars}`

  return stars.length==1?stars+".0":stars
}

const geneDis = (val)=>{
  var dis = Math.floor((val*1000)%100 * 0.5)/10
  return dis
}

const getJobs = (val)=>{
  var dis = Math.floor((val*1e6)%200)
  return dis
}

const JobPopup = (props)=>{
  const [data, setData] = useState({})

  const handleInput = (e)=>{
    var key = e.target.name
    var tmp = {...data}
    tmp[key] = e.target.value
    setData(tmp)
  }

  const handleReset = ()=> setData({
    seeker: "",
    title: "",
    address: "",
    duration: "",
    hrmin: "",
    startsin: "",
    fhrmin: "",
    price: ""
  })

  const handlePost = ()=> {
    props.handlePost(data)
  }

  useEffect(()=>{
    setData(props.data)
  }, [props.data])

  useEffect(()=>{
    if(!props.open) handleReset()
  }, [props.open])

  return (
    <Dialog
      className="job-dialog"
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      onClose={props.handleClose}>
      <div className="flex relative">
        <div className="job-left-pane">
          <div className="w-full text-gray-100 text-2xl my-8 px-6">Dolet</div>
          <div className="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fillOpacity="0.6" d="M0,96L34.3,112C68.6,128,137,160,206,186.7C274.3,213,343,235,411,224C480,213,549,171,617,133.3C685.7,96,754,64,823,85.3C891.4,107,960,181,1029,192C1097.1,203,1166,149,1234,128C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fillOpacity="0.8" d="M0,288L34.3,256C68.6,224,137,160,206,160C274.3,160,343,224,411,229.3C480,235,549,181,617,133.3C685.7,85,754,43,823,26.7C891.4,11,960,21,1029,42.7C1097.1,64,1166,96,1234,101.3C1302.9,107,1371,85,1406,74.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fillOpacity="1" d="M0,0L30,16C60,32,120,64,180,80C240,96,300,96,360,122.7C420,149,480,203,540,208C600,213,660,171,720,133.3C780,96,840,64,900,80C960,96,1020,160,1080,160C1140,160,1200,96,1260,85.3C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        <Container className="p-6 h-100">
          <h2 className="text-gray-800 text-3xl text-blue-500">Job Details</h2>
          <div className="hr-tag"></div>
          <Grid container className="mb-8">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield right-padded"
                label="Your Name"
                name="seeker"
                autoFocus autoComplete="off"
                variant="standard"
                value={data.seeker}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield"
                label="Job Title"
                name="title"
                autoComplete="off"
                variant="standard"
                value={data.title}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AssignmentIndOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Grid container className="mb-8">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield right-padded"
                label="Address"
                name="address"
                variant="standard"
                value={data.address}
                onChange={handleInput}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="flex">
              <TextField
                fullWidth={true}
                className="job-textfield pr-4"
                label="Duration"
                name="duration"
                variant="standard"
                autoComplete="off"
                value={data.duration}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
              <Select name="hrmin" variant="standard"
                value={data.hrmin} onChange={handleInput}>
                <MenuItem value="min">minutes</MenuItem>
                <MenuItem value="hour">hours</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container className="mb-8">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield right-padded"
                label="Name your price"
                name="price"
                autoComplete="off"
                variant="standard"
                value={data.price}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="flex">
              <TextField
                fullWidth={true}
                className="job-textfield pr-4"
                label="Job starts in"
                name="startsin"
                autoComplete="off"
                variant="standard"
                value={data.startsin}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TimerOutlinedIcon color="primary"/>
                    </InputAdornment>
                  )
                }}
              />
              <Select name="fhrmin" variant="standard"
                value={data.fhrmin} onChange={handleInput}>
                <MenuItem value="min">minutes</MenuItem>
                <MenuItem value="hour">hours</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <div className="flex justify-between items-center mt-24">
            <div className="reset-button" onClick={handleReset}>Reset All</div>
            <div className="post-button" onClick={handlePost}>POST JOB</div>
          </div>
        </Container>
      </div>
    </Dialog>
  )
}

const FormContainer = (props)=>{
  const [open, setOpen] = useState(false)
  const [fdata, setFdata] = useState({})
  const handleClose = ()=> setOpen(false)
  const handleOpen = ()=> setOpen(true)
  const handlePost = (data)=> {
    setOpen(false)
    props.setState(data)
    props.handleNext(0.5)
  }

  const handleData = (e) => {
    var tmp = {}, job = default_jobs[e.target.dataset.id]
    tmp.title = job.name
    tmp.duration = 60
    tmp.hrmin = "min"
    tmp.startsin = 5
    tmp.fhrmin = "min"
    tmp.price = 100

    setFdata(tmp)
    setOpen(true)
  }

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
      "name": "Shop Pickup",
      "img": "shop.jpg"
    },{
      "name": "Shopping",
      "img": "shopping.jpg"
    },{
      "name": "Cooking",
      "img": "cooking.jpg"
    },{
      "name": "Shifting",
      "img": "shifting.jpg"
    }
  ]

  return (
    <div className="job-create-container">
      <div className="float-wrapper">
        <div className="jobs-float-card">
          {default_jobs.map((job, i)=>{
            return (
              <div className="default-job prtclk" onClick={handleData}
                data-id={i} key={i}>
                <div className="job-pic" style={{
                  backgroundImage: `url(${'img/services/' + job.img})`
                }}></div>
                <span>{job.name}</span>
              </div>
            )
          })}
        </div>

        <div className="job-post-container">
          <div className="post-button"
            onClick={handleOpen}>CUSTOM JOB</div>
        </div>
      </div>
      <JobPopup open={open} data={fdata} handleClose={handleClose}
                handleData={handleData} handlePost={handlePost}/>
    </div>
  )
}

const SearchingHelper = (props)=>{

  useEffect(()=>{
    setTimeout(()=> props.handleNext(props.next), props.duration)
  }, [props.handleNext])

  return (
    <div className="searhing-helpers">
      <div className="loading-container">
        <div className="text-2xl text-gray-700 font-bold">{props.txt}</div>
        <div className="moving-dots-container">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  )
}

const AvailableHelpers = (props)=>{
  const [helper, setHelper] = useState({})
  const [allHelpers, setAllHelpers] = useState(dfdata.helpers.map(helper => {
    var dis = geneDis(pseudoN(helper.img)),
        rate = geneStar(pseudoN(helper.img)),
        jobs = getJobs(pseudoN(helper.img))

    var s = 0.4*(1/dis) + 0.4*rate + 0.2*jobs
    helper.score = s
    helper.ratings = rate
    helper.jobs = jobs
    return helper
  }).sort((a,b) => a.score < b.score ? 1 : -1))
  const [hid, setHid] = useState(0)

  const handlePress = (e) => {
    var idx = e.target.dataset.id
    props.setState(allHelpers[idx])
    props.handleNext(1.5)
  }

  useInterval(()=>{
    var ele = document.querySelector(`div.helpers-container > div:nth-child(${hid+1})`)
    if(ele){
      ele.classList.toggle('zeroscale')
      setHid(hid + 1)
    }else{
      setHid(-1)
    }
  }, hid > -1 ? 400: null)

  return (
    <div className="available-helpers">
      <div className="text-3xl text-gray-800">Available Helper near you</div>
      <div className="helpers-container">
        {allHelpers.map((helper, i)=>{
          return (
            <div className="helper-box zeroscale" key={i}>
              <div className="profile-pic-container">
                <div className="profile-pic" style={{
                  backgroundImage: `url(${helper.img})`
                }}>
                </div>
                <div className="avhelper-name" dangerouslySetInnerHTML={{
                  "__html": helper.name.split(" ").join("<br/>")
                }}>
                </div>
              </div>
              <div className="helper-details">
                <div className="helper-content">
                  <div className="helper-about-title">About</div>
                  <div className="helper-bio">
                    {helper.bio}
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="post-button hire-btn" onClick={handlePress} data-id={i}>HIRE ME</div>
                  </div>
                </div>
                <div className="helper-numbers text-center">
                  <div className="helper-info-box my-4">
                    <div className="text-2xl leading-6">{geneDis(pseudoN(helper.img))}</div>
                    <div className="text-xs font-medium w-16">KM AWAY</div>
                  </div>
                  <div className="helper-info-box my-4">
                    <div className="text-2xl leading-6">{helper.ratings}★</div>
                    <div className="text-xs font-medium">RATINGS</div>
                  </div>
                  <div className="helper-info-box">
                    <div className="text-2xl leading-6">{helper.jobs}</div>
                    <div className="text-xs font-medium">JOBS</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const JobProgress = (props)=>{
  const [timeleft, setTimeLeft] = useState(props.startsin)
  const [done, setDone] = useState(false)

  const handleNext = ()=>{
    props.handleNext(3)
  }

  useInterval(() => {
    if (timeleft > 0) {
      if(timeleft == 1){
        handleNext()
      }

      setTimeLeft(timeleft - 1)
    }
  }, timeleft > 0 ? 1000 : null)

  return (
    <div className="final-job-progress">
      <div className="p-2 text-xl">
        Your Job about to start in
      </div>
      <div className="job-timer">
        {formatTime(timeleft)}
      </div>
      <div className="post-button" onClick={handleNext}>JOB COMPLETED</div>
    </div>
  )
}

const JobCompleted = (props)=>{
  const [ratings, setRatings] = useState(0)
  const handleRating = (e,v) => setRatings(v)
  const handleNext = () => props.handleNext(0)
  // const helper = {
  //   "name": "Amiyah Graham",
  //   "bio": "If you catch me outside of work, I'm an adventurous traveler.",
  //   "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  // }

  return (
    <div className="job-completed-container">
      <div className="rate-helper-container">
        <div className="helper-box">
          <div className="profile-pic-container">
            <div className="profile-pic" style={{
              backgroundImage: `url(${props.helper.img})`}}>
            </div>
            <div className="avhelper-name" dangerouslySetInnerHTML={{
              "__html": props.helper.name.split(" ").join("<br/>")
            }}></div>
          </div>
          <div className="helper-details">
            <div className="helper-content">
              <div className="helper-about-title">About</div>
              <div className="helper-bio">
                {props.helper.bio}
              </div>
            </div>
            <div className="helper-numbers text-center">
              <div className="helper-info-box my-4">
                <div className="text-xl leading-6">{props.helper.ratings}★</div>
                <div className="text-xs font-medium">RATINGS</div>
              </div>
              <div className="helper-info-box">
                <div className="text-xl leading-6">{props.helper.jobs}</div>
                <div className="text-xs font-medium">JOBS</div>
              </div>
            </div>
          </div>
          <div className="helper-rate px-4">
            <Typography component="legend">Rate Me</Typography>
            <Rating value={ratings} onChange={handleRating}/>
          </div>
        </div>
        <div className="">
          <div className="post-button" onClick={handleNext}>THANKS FOR YOUR SERVICE</div>
        </div>
      </div>
    </div>
  )
}

function SeekerDashboard() {
  const [prog, setProg] = useState(0)
  const [jdata, setJobData] = useState({})
  const [helper, setHelper] = useState(dfdata.helpers[2])

  const handleNext = (p) => setProg(p)
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

      {prog == 0 ? <FormContainer handleNext={handleNext} setState={setJobData}/>:null}
      {prog == 0.5 ? <SearchingHelper handleNext={handleNext} duration={4000}
                      next={1} txt="Searching for Helpers Nearby"/>:null}
      {prog == 1 ? <AvailableHelpers handleNext={handleNext} setState={setHelper}/>:null}
      {prog == 1.5 ? <SearchingHelper handleNext={handleNext} duration={4000}
                      next={2} txt="Assigning the Helper to your job"/>:null}
      {prog == 2 ? <JobProgress handleNext={handleNext} startsin={3}/>:null}
      {prog == 3 ? <JobCompleted handleNext={handleNext} helper={helper}/>:null}
    </div>
  );
}

export default SeekerDashboard;
