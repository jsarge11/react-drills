import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      list: ['heres an item', 'heres another item', 'heres a fourth item'],
    }

  }
  render() {
    return (
      <div class="App">
        {this.state.list}
      </div>
    );
  }
}

export default App;
