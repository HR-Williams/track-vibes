import React, {useState} from "react";

const Dropdown = props => {

  const [selectedValue, setSelectedValue] = useState('');

  // const dropdownChanged = e => {
  //   props.changed(e.target.value);
  // }
  
  return (
    <React.Fragment>
      <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
        {props.options.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
      </select>
      <p>Selected from dropdown: {selectedValue}</p>
    </React.Fragment>
  );
}

export default Dropdown;