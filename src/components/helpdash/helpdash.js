import React, {
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import {
  Container,
  Grid,
  Fab,
  Button,
  CircularProgress,
  makeStyles,
  Dialog,
  DialogContentText,
  Link
} from '@material-ui/core';
import './helpdash.css';

import CheckIcon from '@material-ui/icons/Check';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRoot: {
    color: '#e6e6e6',
    backgroundColor: '#11c14d',
    fontFamily: 'Poppins',
    padding: '1vh 2vw',
    borderRadius: '48px',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRootOnline: {
    color: '#e6e6e6',
    backgroundColor: '#891ac7',
    fontFamily: 'Poppins',
    padding: '1vh 2vw',
    borderRadius: '48px',
    fontSize: '1em',
    textTransform: 'none'
  },
  buttonSuccess: {
    backgroundColor: '#14c33b',
    '&:hover': {
      backgroundColor: '#14c33b',
    },
  },
  fabProgress: {
    color: '#097d23',
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: '#29f156',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function Helpdash() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [isOnline, setOnline] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    var count = 0;
    var visibleHelp = setInterval(() => {
      if (count < 11) {
        var helpcont = document.getElementsByClassName('helpercontainers')[0];
        if (helpcont) {
          if (helpcont.children) {
            if (helpcont.children[count]) {
              helpcont.children[count].classList.remove("zeroscale");
              helpcont.children[count].classList.add("helpercont");
              count += 1;
            }
          }
        }
      } else {
        clearInterval(visibleHelp);
      }
    }, 500);
  }, [jobs])

  if (jobs.length == 0) {
    var tmp = [];
    var names = [
      "Regan Mcmahon",
      "Savanah Robbins",
      "Rigoberto Atkinson",
      "Lance Jimenez",
      "Tyson Love",
      "Cristian Ellison",
      "Keely Grimes",
      "Aiden Pierce",
      "Malia Bautista",
      "Ryan Booker",
      "Leonard Oconnor",
      "Esther Walters"
    ]

    var jobtitles = [
      "Dropping at some place",
      "Full length Grocery Shopping",
      "Gradening and plants stuff",
      "Taking care of dog",
      "Taking care of baby",
      "Picking something from a shop"
    ]

    for (var i = 0; i < 6; i++) {
      var tp = ["minutes","hours"][Math.floor(Math.random() * 2)],
          tm = 0;
      if(tp="minutes"){
        tm = Math.floor(Math.random() * 12) * 5;
      }else{
        tm = Math.floor(Math.random() * 5);
      }

      tmp.push({
        title: jobtitles[i],
        distance: (1 + Math.floor(Math.random() * 5)) + " km",
        price: 50 + Math.floor(Math.random() * 450),
        duration: tm+" "+tp,
        startsIn: Math.floor(Math.random() * 10) * 5
      });
    }

    setJobs(tmp);
  }

  const handleClick = () => {
    setOpen(true);
    setSuccess(false);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  const handleSelect = (event) => {
    var schelper = jobs[event.target.dataset.index];
    handleClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnline = () => {
    setOnline(true);
  }

  return (
    <div className="dash">
      {isOnline? (<div className="dashcont w-full px-32 py-12">
        <div className="upperhalf mb-12">
          <span className="text-2xl text-green-600 font-bold">Offered Jobs near you</span>
        </div>
        <div className="helpercontainers flex flex-wrap justify-between">
          {jobs.map(job=>{
            return (
              <div className="zeroscale mb-12 border-solid border-red-500 border-4 rounded-xl w-96 h-60 p-4 outline flex items-center">
                <img src="/img/bag.jpg" className="w-36 rounded-full" alt=""/>
                <div>
                  <div className="infocont my-4">
                    <div className="text-base font-bold text-gray-800 mb-2">{job.title}</div>
                    <div className="text-sm font-semibold text-gray-600">
                      <span>{job.distance}</span> • <span className="text-purple-600">starting in {job.startsIn} min</span>
                    </div>
                  </div>
                  <div className="moreinfo flex mb-4">
                    <div className="jobsdone mr-4">
                      <div className="font-bold text-gray-700 text-sm">Price Offered</div>
                      <div className="text-blue-600 font-semibold">₹ {job.price}</div>
                    </div>
                    <div className="ratings">
                      <div className="font-bold text-gray-700 text-sm">Duration</div>
                      <div className="text-yellow-600 font-semibold">{job.duration}</div>
                    </div>
                  </div>
                  <Button
                    className={'servbutton '+classes.btnRoot}
                    variant="contained"
                    onClick={handleClick}
                  >
                    Pick this Job!
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title">
          <div className="p-10 flex flex-col items-center">
            <div className='relative'>
              <Fab
                aria-label="save"
                color="primary"
                className={buttonClassname}
              >
                {success ? <CheckIcon /> : <AutorenewIcon />}
              </Fab>
              {loading && <CircularProgress size={68} className={classes.fabProgress} />}
              <span className="text-lg ml-6 font-bold text-blue-600 my-4 text-center">
                {!success ? 'Loading': 'You have been Assigned to this Job'}
              </span>
              {success ? (
                <a
                  className="ml-4 text-blue-900 font-bold"
                  href="https://google.com/maps/places/">
                  🔗 Map</a>
              ): null}
            </div>
          </div>
        </Dialog>
      </div>):(
        <div className="onlinebutton flex flex-col items-center py-48">
          <Button
            className={'servbutton '+classes.btnRootOnline}
            variant="contained"
            onClick={handleOnline}
            >
            Go Online
          </Button>
        </div>
      )}
    </div>
  )
}

export default Helpdash;
