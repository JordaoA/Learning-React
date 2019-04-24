import React, { Component } from 'react';
import { Input } from 'reactstrap';

class InputSelect extends React.Component {
    render() {
        
        return (
            <div className="col-4 mt-2">

                <Input type="select" value={this.props.value}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Input>

            </div>
        );
    }
}

export default InputSelect;