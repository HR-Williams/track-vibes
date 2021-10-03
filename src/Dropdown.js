import React from "react";

const Dropdown = props => {

  

  // const dropdownChanged = e => {
  //   props.changed(e.target.value);
  // }
  
  return (
    <React.Fragment>
      <select>
        {props.options.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
      </select>
    </React.Fragment>
  );
}

export default Dropdown;