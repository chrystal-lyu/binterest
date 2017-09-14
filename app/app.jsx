import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import PinList from 'PinList';
import PinDetail from 'PinDetail';
import store, {defaultState} from './store/configStore';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={PinList} />
        <Route path="pins" component={PinList} />
          <Route path="pins/:pinId" component={PinDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
