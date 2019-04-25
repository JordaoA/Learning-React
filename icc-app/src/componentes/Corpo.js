import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CorpoInput from './CorpoInput';
import CorpoInputTextArea from './CorpoInputTextArea';
import Estatistica from './Estatistica';

import {Link} from 'react-router-dom'

import { Container, Row, Col, Form } from 'reactstrap';
//const para testar o gráfico. para testar colocar um onClick={a} na tag Link
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
  ]}/>, document.getElementById('root'));
}

class Corpo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      values: [-1, -1, -1, -1]
    }
  }


  
  render() {
    return (
      <div className="mt-5">
        <Container className="borda" expand="md">
          <Form>
            <Row>

              <Col className="form-group my-3">
                <CorpoInput id="1" text="Seu aproveitamento da aula" value={this.state.values[0]}></CorpoInput>
                <CorpoInput id="2" text="Explicação do conteúdo" value={this.state.values[1]}></CorpoInput>
                <CorpoInput id="3" text="Material da aula" value={this.state.values[2]}></CorpoInput>
                <CorpoInput id="4" text="Avaliação geral da aula" value={this.state.values[3]}></CorpoInput>
              </Col>

              <Col className="col-lg-6 col-sm-12 my-3">
                <CorpoInputTextArea text="Dica(s) para melhorar a aula"></CorpoInputTextArea>
              </Col>

            </Row>
            <Link className="btn btn-primary direita my-2" to={"/resultado"}>Enviar</Link>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Corpo;