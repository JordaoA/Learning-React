import React from 'react';
import InputSelectText from './InputSelectText';
import InputSelect from './InputSelect';


class CorpoInput extends React.Component {
    render() {
        return (
            
            <div className="row my-2">
                <InputSelectText text={this.props.text}></InputSelectText>
                <InputSelect myFunction={(e) => this.props.myFunction(e, this.props.id)} value={this.props.value}></InputSelect>
            </div>
        );
    }
}

export default CorpoInput;