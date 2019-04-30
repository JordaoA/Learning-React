import React from 'react';
import { Label } from 'reactstrap';

class InputSelectText extends React.Component {
    render() {

        return (

            <div className="col mt-2 esquerda">
                <Label> {this.props.text} </Label>
            </div>

        );
    }
}

export default InputSelectText;