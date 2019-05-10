import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CorpoInput from './CorpoInput';
import CorpoInputTextArea from './CorpoInputTextArea';
import Estatistica from './Estatistica';
import axios from 'axios';
import Titulo from './Title';
import Matricula from './Matricula';

import { Link } from 'react-router-dom'

import { Container, Row, Col, Form, Navbar } from 'reactstrap';

//const para testar o gráfico. para testar => colocar um onClick={a} na tag Link
const a = () => {
  ReactDOM.render(<Estatistica
    values={[13, 8, 3, 4, 5, 6]}
    labels={["Seu aproveitamento da aula", "Explicação do conteúdo", "Material da aula", "Avaliação geral da aula"]}
    label={"Avaliações Recebidas"}
    colors={[
      'rgba(255,99,132,0.6)',
      'rgba(54,162,235,0.6)',
      'rgba(255,206,86,0.6)',
      'rgba(75,192,192,0.6)',
      'rgba(153,102,255,0.6)',
      'rgba(255,159,64,0.6)',
      'rgba(255,99,132,0.6)'
    ]} />, document.getElementById('root'));
}

class Corpo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      values: [1, 1, 1, 1],
      matricula: "",
      textArea: ""
    }
    this.setMatricula = this.setMatricula.bind(this);
    this.setTextArea = this.setTextArea.bind(this);
  }

  setMatricula(e) {
    this.setState({ matricula: e.target.value});
  }

  setValues(e, id) {
    let arr = this.state.values;
    arr[id] = parseInt(e);
    this.setState({ values: arr });
  }

  setTextArea(e) {
    this.setState({ textArea: e.target.value});
  }

  print() {
    console.log(this.state.values);
  }

  onSubmit = () => {
    axios({
      method: 'post',
      url: "http://localhost:9000/salvaValores",
      headers: { "Content-Type": "application/json" },
      data: {
        values: this.state.values,
        matricula: this.state.matricula,
        textArea: this.state.textArea
      }
    });
  }

  render() {

    return (
      <div>

        <div>

          <Navbar color="dark" expand="md">
            <div className="container">
              <div className="row col-12">

                <Titulo></Titulo>

                <Matricula myFunction={this.setMatricula} ></Matricula>

              </div>
            </div>
          </Navbar>

        </div>

        <div className="mt-5">
          <Container className="borda" expand="md">
            <Form>
              <Row>

                <Col onChange={console.log(this.state.textArea)} className="form-group my-3">
                  {renderCorpo([
                    {
                      id: 0,
                      text: "Seu aproveitamento da aula"
                    },
                    {
                      id: 1,
                      text: "Explicação do conteúdo"
                    },
                    {
                      id: 2,
                      text: "Material da aula"
                    },
                    {
                      id: 3,
                      text: "Avaliação geral da aula"
                    }
                  ], this.setValues.bind(this), this.state.values)}
                </Col>

                <Col className="col-lg-6 col-sm-12 my-3">
                  <CorpoInputTextArea myFunction={this.setTextArea}  text="Dica(s) para melhorar a aula"></CorpoInputTextArea>
                </Col>

              </Row>
              <Link onClick={this.onSubmit} className="btn btn-primary direita my-2" to={"/resultado"}>Enviar</Link>
            </Form>
          </Container>
        </div>

      </div>
    );
  }
}


const renderCorpo = (arrayObjs, myFunction, values) => {

  return arrayObjs.map((obj) => (
    <CorpoInput key={obj.id} id={obj.id} myFunction={myFunction} text={obj.text} value={values[obj.id]}></CorpoInput>
  ));
}


export default Corpo;