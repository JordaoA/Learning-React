import React, { Component } from 'react';
import '../App.css';
import { Navbar, Label } from 'reactstrap';


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

class Titulo extends Component {
  render() {
    return (

      <div className="col-lg-6 col-md-6 col-sm-12">
        <Label className="text-light">
          Formulário de Avaliação de Aula
        </Label>
      </div>

    );
  }
}

class Matricula extends Component {
  render() {
    return (

      <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-2 col-sm-12">
        <input className="form-inline" placeholder="Sua Matrícula"></input>
      </div>

    );
  }
}

export default Topo;
