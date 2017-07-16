import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/Button';
import Toggle from 'material-ui/Switch';

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
