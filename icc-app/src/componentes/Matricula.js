import React, { Component } from 'react';
import '../App.css';

class Matricula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matricula: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ matricula: e.target.value });
        this.props.myFunction(e);
    }

    render() {
        return (
            <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-2 col-sm-9 offset-sm-3">
                <input type="text" value={this.state.matricula} onChange={this.handleChange} className="form-inline" placeholder="Sua Matrícula"></input>
            </div>
        );
    }
}

export default Matricula;