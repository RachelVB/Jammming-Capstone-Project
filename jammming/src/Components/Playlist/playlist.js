import React from 'react';
import './playlist.css';
import TrackList from './../TrackList/tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    /* QUESTION: How do we know that this method relates to the 'input' element? 
    Then we add an onChange attribute to the input element. Why? */
      this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList 
        tracks={this.props.playlistTracks} 
        onRemove={this.props.onRemove}
        isRemoval={true} 
        />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;