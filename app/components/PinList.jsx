import React from 'react';
import {Link} from 'react-router';

import Navigation from 'Navigation';
import PinSingle from 'PinSingle';

export class PinList extends React.Component {
  render() {
    return(
      <div id="wrapper">
        <div id="columns">
          {this.props.pins.map((pin, i) => 
            <PinSingle {...this.props} key={i} i={i} pin={pin} />)}
        </div>
      </div>
    )
  }
};

export default PinList;