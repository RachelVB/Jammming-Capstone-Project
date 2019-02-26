
let userAccessToken;
let redirectURI = 'http://localhost:3000/';
let clientID = '5bd1f5304dc54c2581705626669a4af7';

const Spotify = {
  getAccessToken() {
    if(userAccessToken)
      return userAccessToken;
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      let accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      let expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
  
      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');
  
      return accessToken;
    } else {
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },
  search: async function (term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization: `Bearer ${userAccessToken}`}
  }).then((response) => {
      return response.json()
  }).then((jsonResponse) => {
    if (jsonResponse.track) {
      return jsonResponse.tracks.map(((track) => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
      }))
    }
  })
  },
  savedPlaylist: async function (name,trackArray) {
    if (!name && trackArray.length === 0) {
      return;
    }
    let accessToken = userAccessToken;
    // if (!accessToken) {
    //   console.log('No access token');
    //   return;
    // }
    const headers = {Authorization: `Bearer ${accessToken}` };
    let userID;
    return fetch(`https://api.spotify.com/v1/me`, {headers: headers}
  ).then((response) => {
    return response.json()
  }).then((jsonResponse) => {
    return jsonResponse.id = userID
  // eslint-disable-next-line no-sequences
  }),
  fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({name: this.playlistID})
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {console.log(networkError.message)
  }).then(jsonResponse => {
    jsonResponse.id = this.playlistID;
  }),
  fetch(`https://api.spotify.com/playlists/${this.playlistID}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({uri: this.tracks.map(item => this.uri)})
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {console.log(networkError.message)
  }).then(jsonResponse => {
    jsonResponse.id = this.playlistID;
  })
  }
  
}

export default Spotify;