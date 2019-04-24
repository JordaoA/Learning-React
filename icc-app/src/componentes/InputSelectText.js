import React, { Component } from 'react';
import InputSelect from './InputSelect';
import { Label } from 'reactstrap';

class InputSelectText extends React.Component {
    render() {

        return (
            <div className="form-group">
            
                <div className="row">
                    <div className="col mt-2 esquerda">
                        <Label> {this.props.text} </Label>
                    </div>
                    <InputSelect value={this.props.value}></InputSelect>
                </div>

            </div>
        );
    }
}

export default InputSelectText;