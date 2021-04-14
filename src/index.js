
import React from "react";
import ReactDOM from "react-dom";
import Data from "./Data.jsx";
import Card from "./Card.jsx";

function dis(val)
{
    return (
      <Card name={val.name} age={val.age} sal={val.sal}/>
    );
}

ReactDOM.render(
  <>
    <h1>Data of the employee</h1>    
    {Data.map(dis)}
  </>
  ,document.getElementById("root")
);
