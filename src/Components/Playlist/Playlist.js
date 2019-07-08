import React from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    let newName = event.target.value;
    this.props.onNameChange(newName);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.props.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;
