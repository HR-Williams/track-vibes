import React from "react";

const Search = () => {

  function handleSearch(event) {
  event.preventDefault();
  console.log(event.target.artist.value);
}
  return(
    <React.Fragment>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          name='artist'
          placeholder='Artist' />
          <button type='submit'>Search</button>
      </form>
    </React.Fragment>
  );
}

export default Search;

// function handleSearch(event) {
//   event.preventDefault();
//   console.log(event.target.artist.value);
// }