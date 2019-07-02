import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track)
  }

  render() {

    const renderAction = () => {
      if (this.props.isRemoval) {
        return '-';
      } else {
        return (
        <a onClick={this.addTrack}> + </a>);
      }
    };

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
