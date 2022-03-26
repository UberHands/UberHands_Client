import React, {
  useState,
  useEffect
} from 'react';

import './App.css';

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
  Snackbar,
  LinearProgress,
  Link
} from '@mui/material';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';

function App() {
  const [card1, setCard1] = React.useState(1);

  return (
    <div className="home">
      <div className="bannerContainer w-full mb-12">
        <Grid container xs="12" className="home-grid">
          <div className="bannertextCont bg-gray-800 rounded-xl text-center">
            <div className="home-quote font-bold text-gray-100">
              A <span>helping hand</span> near you
            </div>
            <div className="appdesc text-center my-12 text-gray-200 text-xl flex flex-col items-center">
              <div>We are intent to create a community that conglomerates people from</div>
              <div>all niches of society under one sphere to sustain and succour.</div>
            </div>
            <div className="servcont flex justify-between">
              <div className="descntain bg-gray-700 p-6 rounded-lg text-left">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Find the service you need
                </h1>
                <div className="stepdesc text-left text-gray-500">
                  Choose from our popular options or create a custom service to
                  get your job done in a few simple clicks
                </div>
              </div>
              <div className="descntain bg-gray-700 p-6 rounded-lg text-left">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Furnish your requirements
                </h1>
                <div className="stepdesc text-left text-gray-500">
                  Select your requirements to help us find suitable helpers for you
                </div>
              </div>
              <div className="descntain bg-gray-700 p-6 rounded-lg text-left">
                <h1 className="font-semibold text-lg text-gray-200 mb-4">
                  Choose among our verified helpers
                </h1>
                <div className="stepdesc text-left text-gray-500">
                  Decide from a list of available helpers to assist you with your needs
                </div>
              </div>
            </div>
            <Grid container className="mt-12">
              <Grid item xs={12} sm={6}>
                <Button
                  className={'servbutton btnRoot'}
                  variant="contained"
                  href="/seekerdashboard"
                >
                  Register as Help Seeker
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  className={'servbutton btnRoot'}
                  variant="contained"
                  href="/helperdashboard"
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
