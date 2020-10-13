import React, { Component } from 'react';
import './App.css';
import Ball from './Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={4} />
        <Ball num={12} />
        <Ball num={32} />
        <Ball num={21} />
      </div>
    );
  }
}

export default App;
