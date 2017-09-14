import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Navigation from 'Navigation';

export class Main extends React.Component {
  render() {
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

const mapStatetoProps = (state) => {
  return {
    pins: state.pins
  }
}

export default connect(mapStatetoProps)(Main);