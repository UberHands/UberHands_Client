import React, {useState, useEffect} from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  CircularProgress,
  makeStyles,
  LinearProgress,
  Dialog,
  DialogContentText,
  FormControlLabel,
  Select,
  MenuItem,
  Input,
  InputLabel,
  Switch,
  Link,
  FormHelperText
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/material/InputAdornment';

import './seekerDashboard.scss';

const JobPopup = (props)=>{
  const [data, setData] = useState(props.data)

  const handleInput = (e)=>{
    var key = e.target.getAttribute('id')
    var tmp = {...data}
    tmp[key] = e.target.value
    setData(tmp)
  }

  return (
    <Dialog
      className="job-dialog"
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      onClose={props.handleClose}>
      <div className="flex">
        <div className="w-1/3 bg-blue-500 h-100"></div>
        <hr/>
        <Container className="p-6 h-100">
          <h2 className="text-gray-800 mb-4 text-3xl">CREATE JOB</h2>
          <Grid container className="mb-8">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield"
                label="Your Name"
                id="seeker"
                variant="standard"
                value={data.seeker}
                onChange={handleInput}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield"
                label="Job Title"
                id="title"
                variant="standard"
                value={data.title}
                onChange={handleInput}
              />
            </Grid>
          </Grid>
          <Grid container className="mb-8">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield"
                label="Address"
                id="address"
                variant="standard"
                autocomplete={false}
                value={data.address}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                className="job-textfield"
                label="Duration"
                id="duration"
                variant="standard"
                value={data.duration}
                onChange={handleInput}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Dialog>
  )
}

const FormContainer = ()=>{
  const [open, setOpen] = useState(true)
  const [fdata, setFdata] = useState({})
  const handleClose = ()=> setOpen(false)
  const handleOpen = ()=> setOpen(true)
  const handleData = (e) => {
    setFdata(default_jobs[e.target.dataset.id])
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
              <div className="default-job prtclk" onClick={handleData} data-id={i}>
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
      <JobPopup open={open} handleClose={handleClose}
                data={fdata} handleData={handleData}/>
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
