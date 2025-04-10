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
import './helpsearch.css';

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
    backgroundColor: '#245fd3',
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

function Helpsearch() {
  const classes = useStyles();

  const [helpers, setHelpers] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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
  }, [helpers])

  if (helpers.length == 0) {
    var tmp = [];
    var names = [
      "Amiyah Graham",
      "Diana Mayer",
      "Muhammad Hensley",
      "Daphne Preston",
      "Elliott Oconnor",
      "Yazmin Rubio",
      "Miles Barajas",
      "Erika Carlson",
      "Audrina Pennington",
      "Chase Melendez",
      "Leo Gay",
      "Imani Zuniga"
    ]

    for (var i = 0; i < 11; i++) {
      tmp.push({
        name: names[i],
        distance: (1 + Math.floor(Math.random() * 5)) + " km away",
        jobsDone: 80 + Math.floor(Math.random() * 100),
        ratings: 2 + Math.floor(Math.random() * 3) + "." + Math.floor(Math.random() * 10)
      });
    }

    setHelpers(tmp);
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
    var schelper = helpers[event.target.dataset.index];
    handleClick();
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="dash">
      <div className="dashcont w-full px-32 py-12">
        <div className="upperhalf mb-12">
          <span className="text-2xl text-gray-600 font-bold">Available Helper near you</span>
        </div>
        <div className="helpercontainers flex flex-wrap">
          {helpers.map(helper=>{
            return (
              <div className="zeroscale mr-12 mb-12 border-solid border-green-500 border-4 rounded-xl w-64 p-6 outline flex flex-col items-center">
                <img src="/img/user.png" className="w-24 rounded-full" alt=""/>
                <div className="infocont my-4">
                  <span className="text-base font-bold text-gray-800 mr-4">{helper.name}</span>
                  <span className="text-sm font-semibold text-gray-600">{helper.distance}</span>
                </div>
                <div className="moreinfo flex mb-6">
                  <div className="jobsdone mr-4">
                    <div className="font-bold text-gray-700 text-sm">Jobs Done</div>
                    <div className="text-blue-600 font-semibold">{helper.jobsDone}</div>
                  </div>
                  <div className="ratings">
                    <div className="font-bold text-gray-700 text-sm">Ratings</div>
                    <div className="text-yellow-600 font-semibold">★ {helper.ratings}</div>
                  </div>
                </div>
                <Button
                  className={'servbutton '+classes.btnRoot}
                  variant="contained"
                  onClick={handleClick}
                >
                  Hire Now!
                </Button>
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
                {!success ? 'Loading': 'Helper is Assigned'}
              </span>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default Helpsearch;
