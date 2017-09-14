import React from 'react';

export class PinDetail extends React.Component {
  render() {
    const floatPinId = parseFloat(this.props.params.pinId);
    const i = this.props.pins.findIndex((pin) => pin.id === floatPinId);
    console.log(i);
    const pin = this.props.pins[i];
    console.log(pin);
    return(
      <div id="wrapper">
        <div className="test">
          <a className="button" href="/">Back</a>
          <div className="single-pin">
            <img src={pin.photo_src}/>
            <div className="caption">{pin.captions}</div>
          </div>
        </div>
      </div>
    )
  };
};

export default PinDetail;