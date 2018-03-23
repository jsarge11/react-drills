import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
    }
  }

  updateWord(str) {
    this.setState({ 
      item: str.target.value,
    })
    return this.state.item;
  }

  render() {
    return (
      <div id="App">
        <input onChange={(event) => console.log(this.updateWord(event))} type="text" placeholder="whoa" />

        {this.state.item}
      </div>
    );
  }
}

export default App;
