import React, {
  useState,
  useEffect
} from 'react';
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
import './dashboard.css';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRoot: {
    color: '#e6e6e6 !important',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    padding: '2vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

function Dashboard() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [yourname, setYourname] = useState("");
  const [jobtitle, setJob] = useState("");
  const [duration, setDuration] = useState(["",""]);
  const [address, setAddr] = useState("");
  const [price, setPrice] = useState("");
  const [startsIn, setStart] = useState(["",""]);

  var durationarr = ["minutes","hours"];

  if (jobs.length == 0) {
    setJobs([
    {
      img: "/img/services/shop.jpg",
      title: "Picking something from a shop",
      name: "Shop"
    },
    {
      img: "/img/services/dog.png",
      title: "Taking care of dog",
      name: "Dog sitting"
    },
    {
      img: "/img/services/garden.jpg",
      title: "Gradening and plants stuff",
      name: "Gardening"
    },
    {
      img: "/img/services/shopping.jpg",
      title: "Full length Grocery Shopping",
      name: "Shopping"
    },
    {
      img: "/img/services/driving.jpg",
      title: "Dropping at some place",
      name: "Driving"
    },
    {
      img: "/img/services/babysitter.png",
      title: "Taking care of baby",
      name: "Baby Sitting"
    }]);
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleSelect = (event) => {
    var scjob = jobs[event.target.dataset.index];
    setJob(scjob.title);
    setPrice(100);
    setDuration([1, "hours"]);
    setStart([5, "minutes"]);
    handleClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dash">
      <div className="dashcont w-full">
        <div className="stServ px-36 py-16">
          <div className="servtitle text-2xl text-gray-900 font-bold uppercase">Choose among a popular service</div>
          <div className="pservcont w-full overflow-x-scroll mt-12 mb-20">
            <div className="servlist w-max flex">
              {jobs.map((job, idx)=>{
                return(
                  <div className="pserv text-center pr-20">
                    <Button
                      className="servbutton"
                      onClick={handleSelect}
                    >
                      <img data-index={idx} className="w-48 rounded-full" src={job.img} alt="image"/>
                    </Button>
                    <div className="jobtitle mt-4 text-gray-800 text-lg font-bold">{job.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="formcont flex flex-col items-center">
            <div className="text-xl text-gray-600 mb-8">Or</div>
            <Button
              className={'servbutton '+classes.btnRoot}
              variant="contained"
              onClick={handleClick}
            >
              Custom Job
            </Button>
          </div>
        </div>
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title">
          <div className="fmcontainer p-10">
            <Grid container>
              <Grid item xs={12} sm={6} className="">
                <TextField
                  label="Your Name"
                  id="yourname"
                  variant="outlined"
                  value={yourname}
                  onChange={event => {
                    setYourname(event.target.value);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} className="">
                <TextField
                  label="Job Title"
                  id="jobtitle"
                  variant="outlined"
                  value={jobtitle}
                  onChange={event => {
                    setJob(event.target.value);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className="my-6">
              <Grid item xs={12} sm={6} className="">
                <TextField
                  label="Address"
                  id="address"
                  variant="outlined"
                  value={address}
                  onChange={event => {
                    setAddr(event.target.value);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} className="flex justify-between">
                <TextField
                  label="duration"
                  id="duration"
                  variant="outlined"
                  className="w-6/10"
                  value={duration[0]}
                  onChange={event => {
                    setDuration([event.target.value,duration[1]]);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
                <Select
                  value={duration[1]}
                  onChange={(event)=>{
                    setDuration([duration[0], event.target.value]);
                  }}
                  >
                    <MenuItem value={"minutes"}>minutes</MenuItem>
                    <MenuItem value={"hours"}>hours</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container className="my-6">
              <Grid item xs={12} sm={6} className="">
                <TextField
                  label="Price"
                  id="price"
                  variant="outlined"
                  value={price}
                  onChange={event => {
                    setPrice(event.target.value);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} className="flex justify-between">
                <TextField
                  label="starts in"
                  id="startsIn"
                  variant="outlined"
                  className="w-6/10"
                  value={startsIn[0]}
                  onChange={event => {
                    setStart([event.target.value,startsIn[1]]);
                  }}
                  FormHelperTextProps={{
                    className: classes.input
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
                <Select
                  value={startsIn[1]}
                  onChange={(event)=>{
                    setStart([startsIn[0], event.target.value]);
                  }}>
                    <MenuItem value={"minutes"}>minutes</MenuItem>
                    <MenuItem value={"hours"}>hours</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container className="mt-12">
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4} className>
                <Button
                  className={'servbutton '+classes.btnRoot}
                  variant="contained"
                  href="/userdashboard/search"
                >
                  Publish
                </Button>
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default Dashboard;
