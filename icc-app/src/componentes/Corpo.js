import React, { Component } from 'react';
import InputSelectText from './InputSelectText';
import InputSelect from './InputSelect';
import CorpoInput from './CorpoInput';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
                <Col className="col-lg-6 col-sm-12">
                  <FormGroup className="my-3">
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