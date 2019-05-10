import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Corpo from './componentes/Corpo';
import './App.css';
import Estatistica from './componentes/Estatistica';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={"/"} exact={true} component={Corpo}/>
          <Route path={"/resultado"} component={Estatistica}/>
        </Switch>
      </div>
    );
  }
}

export default App;
