import React from "react";

const List = () => {
  const data = [
    { value: 1, name: "Thinkin Bout You"},
    { value: 2, name: "Nights"},
    { value: 3, name: "Chanel"}
  ];
  return (
    <React.Fragment>
      {data.map((item, index) => <li key={index} value={item.value}>{item.name}</li>)}
    </React.Fragment>
  )
}

export default List;