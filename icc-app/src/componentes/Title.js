import React, { Component } from 'react';
import '../App.css';
import { Label } from 'reactstrap';

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

export default Titulo;