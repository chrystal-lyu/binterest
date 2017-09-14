import React from 'react';
import {Link} from 'react-router';

export class PinSingle extends React.Component {
  render() {
    const {pin, i} = this.props;
    return(
      <div className="pin">
        <div><button className="button">+ Save</button></div>
        <Link to={`/pins/${pin.id}`}><img src={pin.photo_src} /></Link>
        <div className="caption overlay">{pin.captions}</div>
      </div>
    )
  };
};

export default PinSingle;