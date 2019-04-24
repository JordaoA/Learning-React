import React, { Component } from 'react';
import CorpoInput from './CorpoInput';
import CorpoInputTextArea from './CorpoInputTextArea';

import { Container, Row, Col, Button, Form} from 'reactstrap';

class Corpo extends Component {
    render() {
        return (
        <div className="mt-5">
          <Container className="borda" expand="md">
            <Form>
              <Row>

                <Col className="form-group my-3">
                  <CorpoInput text="Seu aproveitamento da aula" value={this.props.value}></CorpoInput>
                  <CorpoInput text="Explicação do conteúdo" value={this.props.value}></CorpoInput>
                  <CorpoInput text="Material da aula" value={this.props.value}></CorpoInput>
                  <CorpoInput text="Avaliação geral da aula" value={this.props.value}></CorpoInput>
                </Col>

                <Col className="col-lg-6 col-sm-12 my-3">
                  <CorpoInputTextArea text="Dica(s) para melhorar a aula"></CorpoInputTextArea>
                </Col>

              </Row>
              
              <Button className="direita my-2" color="primary">Enviar</Button>  
            </Form>
          </Container>
        </div>
        );
    }
}

export default Corpo;