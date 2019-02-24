import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import Playlist from './../Playlist/playlist';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
        name: 'LadyGaga',
        artist: 'LadyGaga',
        album: 'Monster',
        id: 'Album3'
      },
      {
        name: 'Rock song',
        artist: 'Some nintys artist',
        album: 'Benny and the Jets',
        id: 'Album7'
      }
      ],
      playlistTracks: [{
        name: 'Madonna',
        artist: 'Madonna',
        album: 'Nintys Album',
        id: 'Album9'
      },
      {
        name: 'Rock song',
        artist: 'Some nintys artist',
        album: 'Benny and the Jets',
        id: 'Album7'
      }
    ],
      playlistName: 'New Playlist'
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  // STEP 49: I'm not clear on this step. Check if I get errors on this.
  removeTrack(track) {
    this.state.playlistTracks.filter(track.id);
    this.setState = this.state.playlistTracks;
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.state.removeTrack} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
