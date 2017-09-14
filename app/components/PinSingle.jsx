import React from 'react';

export class PinSingle extends React.Component {
  render() {
    return(
      <div id="wrapper">
        <div className="test">
          <div className="single-pin"> 
            <img src="https://i.pinimg.com/564x/f2/a5/e3/f2a5e3bbf3b8bd38fa449fe3c3ae2b37.jpg"/>
            <div className="caption overlay">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinSingle;