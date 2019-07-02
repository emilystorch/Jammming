import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  /*  const renderAction = () => {
      if (isRemoval) {
        return '-';
      } else {
        return '+';
      }
    }; */

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">renderAction</button>
      </div>
    )
  }
}

export default Track;
