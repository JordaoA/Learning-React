import React, { Component } from 'react';
import './App.css';
import { Navbar, Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
        <Navbar color="light" light expand="md">

          <Col>Formulário de Avaliação da Aula</Col>

          <Col>

            Matrícula: 
            <input className="ml-2" type="text" placeholder="Sua matrícula"></input>

          </Col>

        </Navbar>
        </div>

        <div className="mt-5">
        <Container className="borda">
          
          <Form>

            <Row>

              <Col>

              <FormGroup>
                <Label for="avaliacao1">Seu aproveitamento da aula</Label>
                <Input type="select" name="select" id="avaliacao1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="avaliacao2">Explicação do conteúdo</Label>
                <Input type="select" name="select" id="avaliacao2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="avaliacao3">Material da aula</Label>
                <Input type="select" name="select" id="avaliacao3">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="avaliacao4">Avaliação geral da aula</Label>
                <Input type="select" name="select" id="avaliacao4">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>

              </Col>

              <Col>

                <FormGroup>
                  <Label for="textoAluno">Dica(s) para melhorar a aula</Label>
                  <Input type="textarea" name="text" id="textoAluno" />
                </FormGroup>
              
              </Col>
          
            </Row>

            <Button className="mb-2" color="primary">Enviar</Button>  

          </Form>

        </Container>
        </div>
        
      </div>
    );
  }
}

export default App;
