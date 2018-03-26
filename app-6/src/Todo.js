import React from 'react'

function Todo(props) {
 return (
  <div className="App">
    <h2>
     {props.task}    
    </h2>
  </div>
 );
}

export default Todo