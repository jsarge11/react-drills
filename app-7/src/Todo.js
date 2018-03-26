import React from 'react'

function Todo(props) {
 return (
  <div className="App">
    <h2>
    {props.task + '\n'}     
    </h2>
  </div>
 );
}

export default Todo