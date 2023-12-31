
import React, {useEffect,useState} from 'react' 
import './App.css';
import Login from './components/Login/Login'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player'
import { useDatalayerValue } from './Data/DataLayer';

const spotify= new SpotifyWebApi();


function App() {
  const[{user,token}, dispatch]=useDatalayerValue() 

  useEffect(()=>{
    const hash= getTokenFromUrl()
    window.location.hash=""
    const _token= hash.access_token

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user)=>{
        console.log(user) 
        dispatch({
          type:"SET_USER",
          user:user
        }) 
      })
      spotify.getUserPlaylists().then((playlists)=>{dispatch({
        type:"SET_PLAYLISTS",
        playlists:playlists
      })
    })

      spotify.getPlaylist('6GdhoEERIKRs5joqq21kat').then((response)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  },[])
 console.log(user,"hello")
 console.log(token,"hello_token")

  return (
    <div className="app">
    
    {token?(<Player spotify={spotify}/>):(<Login/>)}
    </div>
  );
}

export default App;
