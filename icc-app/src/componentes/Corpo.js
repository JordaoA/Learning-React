import React, { Component } from 'react';
import InputSelectText from './InputSelectText';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Corpo extends Component {
    render() {
        return (
        <div className="mt-5">
          <Container className="borda" expand="md">
            <Form>
              <Row>
                <Col>
                  <InputSelectText text="Seu aproveitamento da aula"></InputSelectText>
                  <InputSelectText text="Explicação do conteúdo"></InputSelectText>
                  <InputSelectText text="Material da aula"></InputSelectText>
                  <InputSelectText text="Avaliação geral da aula"></InputSelectText>
                </Col>
                <Col className="col-lg-6 col-sm-12">
                  <FormGroup>
                    <Row>
                      <Col className="mt-2 esquerda">
                        <Label for="textoAluno">Dica(s) para melhorar a aula</Label>
                      </Col>
                      <Col className="mt-2 col-12">
                        <Input rows="5" type="textarea" name="text" id="textoAluno" />
                      </Col>
                    </Row>
                  </FormGroup>
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