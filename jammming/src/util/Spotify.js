const url = 'https://accounts.spotify.com/authorize';
let userAccessToken = '';
let redirectURI = 'http://localhost:3000/';
let clientID = '5bd1f5304dc54c2581705626669a4af7';
const responseType = 'token';
const scope = 'playlist-modify-public';
const authUrl = `${url}?client_id=${clientID}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectURI}`;

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
      window.location = authUrl;
    }
  },
  search: async function (term) {
    let accessToken = await this.getAccessToken();
    if (!accessToken) {
      console.log('No access token')
      return [];
    }
    const mainTerm = encodeURI(term);
    return fetch(`https://api.spotify.com/v1/search?q=${mainTerm}&type=track`, {headers: {Authorization: `Bearer ${userAccessToken}`}
  }).then((response) => {
      return response.json()
  }).then((jsonResponse) => {
    if (jsonResponse.track) {
      return jsonResponse.tracks.map((track) => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
      });
    }
  })
  },
  savedPlaylist: async function (name,trackArray) {
    if (!name && trackArray.length === 0) {
      return;
    }
    let accessToken = userAccessToken();
    // if (!accessToken) {
    //   console.log('No access token');
    //   return;
    // }
    const headers = {Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'};
    const userID = await fetch(`https://api.spotify.com/v1/me`, {headers: headers}
  ).then((response) => {
    return response.json();
  }, networkError => console.log(networkError.error)
  ).then((jsonResponse) => {
    if (jsonResponse && jsonResponse.id) {
      console.log('Error!');
    }
  });
  if (!userID){
    return;
  }
  const playlistID = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
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
    if (jsonResponse && jsonResponse.id) {
      console.log(`Error creating ${name}: ${jsonResponse.error.message}`);
    }
  });
  if (!playlistID) {
    return;
  }
  }
}

export default Spotify;