import React from'react';



export default function House (props) {
  
    return (
      <div className="House">
        <h1> House:{props.name} </h1>
        <h2> Address:{props.address} city:{props.city} {props.state} {props.zip}</h2>
        <button onClick={()=>props.delete(props.id)}> Delete </button>
      </div>
    );
  }
