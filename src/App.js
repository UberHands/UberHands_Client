import React, {
  useState,
  useEffect
} from 'react';

import './App.css';

import axios from 'axios';
import {
  Container,
  Grid,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  CircularProgress,
  makeStyles,
  Snackbar,
  LinearProgress,
  Link
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRoot: {
    color: '#fbfbfb !important',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    padding: '2vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  }
}))

function App() {
  const classes = useStyles();

  const [card1, setCard1] = React.useState(1);

  return (
    <div className="home">
      <div className="bannerContainer w-full mb-12">
        <Grid container className="flex flex-col items-center">
          <div className="bannertextCont px-60 mb:px-20 py-36 mb:py-4 bg-gray-800 rounded-xl text-center">
            <div className="text-7xl mb:text-5xl font-bold text-gray-100">
              A <span className="text-yellow-400">helping hand</span> near you
            </div>
            <div className="appdesc text-center my-12 text-gray-200 text-xl flex flex-col items-center">
              <div>We are intent to create a community that conglomerates people from</div>
              <div>all niches of society under one sphere to sustain and succour.</div>
            </div>
            <div className="servcont flex justify-between mb:flex-col">
              <div className="descntain bg-gray-700 p-6 rounded-lg w-72 text-left mb-12">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Find the service you need
                </h1>
                <div className="stepdesc text-left text-gray-400">
                  Choose from our popular options or create a custom service to
                  get your job done in a few simple clicks
                </div>
              </div>
              <div className="descntain bg-gray-700 p-6 rounded-lg w-72 text-left mb-12">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Furnish your requirements
                </h1>
                <div className="stepdesc text-left text-gray-400">
                  Select your requirements to help us find suitable helpers for you
                </div>
              </div>
              <div className="descntain bg-gray-700 p-6 rounded-lg w-72 text-left mb-12">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Choose among our verified helpers
                </h1>
                <div className="stepdesc text-left text-gray-400">
                  Decide from a list of available helpers to assist you with your needs
                </div>
              </div>
            </div>
            <Grid container className="mt-12">
              <Grid item xs={12} sm={6} className="">
                <Button
                  className={'servbutton '+classes.btnRoot}
                  variant="contained"
                  href="/userdashboard"
                >
                  Register as Help Seeker
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} className="">
                <Button
                  className={'servbutton '+classes.btnRoot}
                  variant="contained"
                  href="/helperdash"
                >
                  Register as Helper
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default App;
