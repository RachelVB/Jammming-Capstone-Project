import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import Playlist from './../Playlist/playlist';
import Spotify from './../../util/Spotify.js';

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
    };
    /* Everytime we create a new method, 
    we need to 'bind' this to our method so that we can use it. */
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let newPlaylistTracks = this.state.playlistTracks.concat(track);
    this.setState({playlistTracks: newPlaylistTracks});
  }

  // STEP 49: I'm not clear on this step. Check if I get errors on this.
  removeTrack(track) {
    let currentPlaylistTracks = this.state.playlistTracks.filter(deleteTrack => deleteTrack.id !== track.id);
    this.setState = ({playlistTracks: currentPlaylistTracks});
  }

  // STEP 57: Check this method if there are errors.
  updatePlaylistName(name) {
    this.setState = name;
  }

  // STEP 63: Wasent clear if this is the way to do it. Chek if errors.
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState = this.playlistName('New Playlist');
    this.setState = this.playlistTracks([]);
  }

  search(term) {
    console.log(term);
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks});
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.state.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
