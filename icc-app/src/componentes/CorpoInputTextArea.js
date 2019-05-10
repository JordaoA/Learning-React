import React from 'react';
import InputSelectText from './InputSelectText';
import InputTextArea from './InputTextArea';

class CorpoInputTextArea extends React.Component {
    
    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <InputSelectText text={this.props.text}></InputSelectText>
                    <InputTextArea myFunction={this.props.myFunction} ></InputTextArea>
                </div>
            </div>
        );
    }
}

export default CorpoInputTextArea;