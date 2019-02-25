
userAccessToken = ;
redirectUrl = 'http://localhost:3000/';
clientId = '5bd1f5304dc54c2581705626669a4af7';

const Spotify = {
  getAccessToken() {
    let accessToken = window.location.href.match(/access_token=([^&]*)/);
    let expirationTime = window.location.href.match(/expires_in=([^&]*)/);
    if (userAccessToken) {
      console('User token already exists!')
      return userAccessToken;
    } else if (accessToken && expirationTime) {
      console.log('User token expired!')
      accessToken = accessTokenValue[1];
      expirationTime = expirationTimeValue[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return;
    } else {
      console.log('No user token defined. Redirecting...')
    }
  }
}

export default Spotify;