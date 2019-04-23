import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'reactstrap';
import Titulo from './Title';
import Matricula from './Matricula';


class Topo extends Component {

  render() {
    return (
      <div>

        <Navbar color="dark" expand="md">
          <div className="container">
            <div className="row col-12">

              <Titulo></Titulo>

              <Matricula></Matricula>

            </div>
          </div>
        </Navbar>

      </div>
    );
  }
}


export default Topo;