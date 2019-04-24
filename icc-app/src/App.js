import React, { Component } from 'react';
import Topo from './componentes/head';
import Corpo from './componentes/Corpo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo></Topo>
        <Corpo />
      </div>
    );
  }
}


export default App;
