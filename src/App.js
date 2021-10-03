import React from "react";
import Search from "./Search";
import List from "./List";
import Dropdown from "./Dropdown";

const App = () => {

  const data = [
    { value: 1, name: "Thinkin Bout You"},
    { value: 2, name: "Nights"},
    { value: 3, name: "Chanel"}
  ];

  return(
    <React.Fragment>
      <Search />
      <List listItems={data}/>
      <Dropdown options={data}/>
    </React.Fragment>
      
  )
}

export default App;
