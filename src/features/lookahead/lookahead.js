import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class Lookahead extends React.Component {

    someMethod = (selected) => {
        this.props.onChange(selected)
    }

    render() {
        const {ingredients} = this.props;
        return (
            <Typeahead
                {...this.state}
                multiple
                id="basic-example"
                onChange={(selected) => this.someMethod(selected)}
                labelKey={'name'}
                options={ingredients?(ingredients):[]}
                placeholder="Filter products by Ingredients..."
            />
        );
    }
}

export default Lookahead;