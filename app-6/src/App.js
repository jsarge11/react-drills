import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: '',
      taskList: [],
    }
  }

  updateItem(e) {
    this.setState({ task: e})
  }
  updateList() {
    let item = this.state.task;
    let newArr = this.state.taskList.slice()
    newArr.push(item);
    this.setState({ 
      taskList: newArr,
      task: "",
    })
  }
  render() {

    let list = this.state.taskList.map((e,i) => {
      return (
          <Todo key={i} task={e} />
      )
    })

    
    return (
      <div className="App">
        <input onChange={(e)=>this.updateItem(e.target.value)} type="text" placeholder="add" value={this.state.task}/>
        <button onClick={(e)=>this.updateList(e)} value={this.state.taskList}>Add to list</button>
  
        {/* <Todo task={this.state.taskList}/> BAD */}

        {list}

      </div>
      );
  }
}

export default App;
