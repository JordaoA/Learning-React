import React from 'react';
import { Input } from 'reactstrap';

class InputSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ values: e.target.value});
        this.props.myFunction(e.target.value);
    }

    render() {
        
        return (
            <div className="col-4 mt-2">

                <Input type="select" value={this.state.values} onChange={this.handleChange}>
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