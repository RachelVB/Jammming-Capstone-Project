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
  }

  addTrack(track) {
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
