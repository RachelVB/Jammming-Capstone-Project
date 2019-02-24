import React from 'react';
import './tracklist.css';
import Track from '../Track/track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.tracks.map(track => 
            <Track key={track.id} onAdd={this.props.onAdd} />
          )
        }
      </div>
    )
  }
}

export default TrackList;