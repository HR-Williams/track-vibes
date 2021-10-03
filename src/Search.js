import React, {useState} from "react";

const Search = () => {

  const [searchedArtistValue, setSearchedArtistValue] = useState('');

  // function handleSearch(event) {
  // event.preventDefault();
  // console.log(event.target.artist.value);
// }
  return(
    <React.Fragment>
      {/* <form onSubmit={handleSearch}> */}
      {/* does this need an event prevent default to not reload after search? */}
      <form value={searchedArtistValue} onSubmit={e => setSearchedArtistValue(e.target.artist.value)}>
        <input
          type='text'
          name='artist'
          placeholder='Artist' />
          <button type='submit'>Search</button>
      </form>
      <p>Searched artist: {searchedArtistValue}</p>
    </React.Fragment>
  );
}

export default Search;

// function handleSearch(event) {
//   event.preventDefault();
//   console.log(event.target.artist.value);
// }