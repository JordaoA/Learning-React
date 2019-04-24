import React, { Component } from 'react';
import InputSelectText from './InputSelectText';
import InputSelect from './InputSelect';


class CorpoInput extends React.Component {
    render() {
        return (
            
            <div className="row my-2">
                <InputSelectText text={this.props.text}></InputSelectText>
                <InputSelect value={this.props.value}></InputSelect>
            </div>
        );
    }
}

export default CorpoInput;