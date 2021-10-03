import React, { useState, useEffect } from "react";
import Search from "./Search";
import List from "./List";
import Dropdown from "./Dropdown";
import { Credentials } from './Credentials';
import axios from "axios";

const App = () => {

  const spotify = Credentials();

  console.log('RENDERING APP.JS');

  const data = [
    { value: 1, name: "Thinkin Bout You"},
    { value: 2, name: "Nights"},
    { value: 3, name: "Chanel"}
  ];

  const [token, setToken] = useState('');
  const [artist, setArtist] = useState('Frank%20Ocean')

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      console.log(tokenResponse.data.access_token);      
      setToken(tokenResponse.data.access_token);
      

      axios('https://api.spotify.com/v1/search?q=Frank%20Ocean&type=artist', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (apiResponse => {        
        console.log(apiResponse.data)
        console.log(apiResponse.data.artists.items[0].name)
        })
    });
  }, []);

  return(
    <React.Fragment>
      <Search artistState={artist}/>
      <List listItems={data}/>
      <Dropdown options={data}/>
    </React.Fragment>
      
  )
}

export default App;
