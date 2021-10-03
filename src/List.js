import React, {useState} from "react";

const List = props => {
  const [selectedListItemValue, setSelectedListItemValue] = useState('');
  
  return (
    <React.Fragment>
      <ul value={selectedListItemValue} onClick={e => setSelectedListItemValue(e.target.value)}>
      {props.listItems.map((item, index) => <li key={index} value={item.value}>{item.name}</li>)}</ul>
      <p>Selected from list: {selectedListItemValue}</p>
    </React.Fragment>
  )
}

export default List;