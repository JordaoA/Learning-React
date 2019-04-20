import React, { Component } from 'react';
import './App.css';
import { Nav, Navbar, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <Col>Formulário de Avaliação da Aula</Col>
          <Col>
            Matrícula: 
            <input type="text" placeholder="Sua matrícula"></input>
          </Col>
        </Navbar>

        <Container className="bg-success">
          
          

        </Container>
      </div>
    );
  }
}

export default App;
