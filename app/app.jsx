import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// Load App scss
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='countdown' component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
