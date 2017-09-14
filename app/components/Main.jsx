import React from 'react';
import {Link} from 'react-router';

import Navigation from 'Navigation';

export class Main extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <footer>
          <div>
            Created by <strong className="highlighted-text">Crystal Lu</strong>
          </div>
        </footer>
      </div>
    )
  }
};

export default Main;