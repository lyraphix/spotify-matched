import querystring from 'querystring';
import { Inter } from '@next/font/google'; 
import Home from '.';
import { render } from 'react-dom';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const login = async() => {
  const response = await fetch('https://accounts.spotify.com/authorize?', {
    method: 'GET',
    headers: {

    }


  })

  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));


}


const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    }),
  });
 
  return response.json();
};

const inter = Inter({ subsets: ['latin'] })

export const topTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};



export default function Safe(){
  console.log(refresh_token)
  const data = getAccessToken();
  return(
  <div>hi

  </div>
)}
