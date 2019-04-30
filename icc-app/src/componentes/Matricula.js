import React, { Component } from 'react';
import '../App.css';

class Matricula extends Component {
    render() {
        return (
            <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-2 col-sm-9 offset-sm-3">
                <input className="form-inline" placeholder="Sua Matrícula"></input>
            </div>
        );
    }
}

export default Matricula;