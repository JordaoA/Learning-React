import React from 'react';
import { Input } from 'reactstrap';

class InputTextArea extends React.Component {
    render() {
        return (
            
            <div className="mt-2 col-12">
                <Input rows="5" type="textarea"></Input>
            </div>
        );
    }
}

export default InputTextArea;