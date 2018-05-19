import React from 'react';
import FlatButton from '@material-ui/core/Button';

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }


    render() {
        return (
          <FlatButton>(not) Flat Button</FlatButton>
        );
    }
}
