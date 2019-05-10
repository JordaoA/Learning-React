import React from 'react';
import { Input } from 'reactstrap';

class InputTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campoDeText: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ campoDeText: e.target.value });
        this.props.myFunction(e);
    }

    render() {
        return (
            <div className="mt-2 col-12">
                <Input value={this.state.campoDeText} onChange={this.handleChange} rows="5" type="textarea"></Input>
            </div>
        );
    }
}

export default InputTextArea;