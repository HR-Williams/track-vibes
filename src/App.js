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
    });
  }, []);

  return(
    <React.Fragment>
      <Search />
      <List listItems={data}/>
      <Dropdown options={data}/>
    </React.Fragment>
      
  )
}

export default App;
