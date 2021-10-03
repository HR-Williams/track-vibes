import React, { useState } from "react";

const Search = props => {

  const [searchedArtistValue, setSearchedArtistValue] = useState('');

  const handleSearch = event => {
    event.preventDefault();
    setSearchedArtistValue(event.target.artist.value);
  }
  // function handleSearch(event) {
  // event.preventDefault();
  // console.log(event.target.artist.value);
  
// }
console.log("searchedArtistValue " + searchedArtistValue);
//this console.log above blips correctly then goes away
  return(
    <React.Fragment>
      {/* <form onSubmit={handleSearch}> */}
      {/* does this need an event prevent default to not reload after search? */}
      {/* <form value={searchedArtistValue} onSubmit={event => setSearchedArtistValue(event.target.artist.value)}> */}
      <form value={searchedArtistValue} onSubmit={handleSearch}>

        <input
          type='text'
          name='artist'
          placeholder='Artist' />
          <button type='submit'>Search</button>
      </form>
      <p>Searched artist: {searchedArtistValue}</p>
      <p>artistState: {props.artistState}</p> 
      
    </React.Fragment>
    
  );
}

export default Search;

// function handleSearch(event) {
//   event.preventDefault();
//   console.log(event.target.artist.value);
// }