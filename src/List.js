import React from "react";

const List = props => {
  
  return (
    <React.Fragment>
      {props.listItems.map((item, index) => <li key={index} value={item.value}>{item.name}</li>)}
    </React.Fragment>
  )
}

export default List;