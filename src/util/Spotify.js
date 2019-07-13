const clientID = '91e69860f2454044bda52d8081fe2b0f';
const redirectURI = 'http://localhost:3000/';

let userAccessToken = '';

let Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      let accessToken = window.location.href.match(/access_token=([^&]*)/);
      let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI};
    }

  }
}

module.exports = Spotify
