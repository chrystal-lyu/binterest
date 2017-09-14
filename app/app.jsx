import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import PinList from 'PinList';
import PinSingle from 'PinSingle';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PinList} />
      <Route path="pins" component={PinList} />
        <Route path="pins/:pinId" component={PinSingle} />
    </Route>
  </Router>,
  document.getElementById('app')
);
