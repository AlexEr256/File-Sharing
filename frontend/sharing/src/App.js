import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './redux/index'
import MainPage from './pages/MainPage/MainPage'
import UploadsPage from './pages/UploadsPage/UploadsPage'
import DownloadPage from './pages/Download/DownloadPage'

import useStyles from './pages/MainPage/MainTheme'



export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Provider  store={store}>
          <Router>
              <Route exact path='/' component={MainPage} />
              <Route exact  path='/uploads/' component = {UploadsPage}/> 
              <Route exact path='/download/:post' component = {DownloadPage}/> 
          </Router>
      </Provider>
         
    </div>
  );
}

