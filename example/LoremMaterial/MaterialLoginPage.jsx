import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: blue500,
  },
};

export default class MaterialAppExampleProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    render() {
        return (
          <div
          style={{
              margin: '20px 100px',
              minWidth: 400,
              maxWidth: 450,
          }}
          >
          <Card style={{ width: '100%' }} >
            <CardHeader
              title="Login Page"
            />
            <CardText>
                <TextField
                hintText="Email Address"
                errorText="This field is required"
                hintStyle={styles.errorStyle}
              /><br />
              <br />
              <TextField
                hintText="Password"
                type="password"
                errorText="This field is required"
                hintStyle={styles.errorStyle}
              /><br />
              <div style={{justifyContent: 'center', display: 'flex'}}>
                <RaisedButton label="Login" primary={true} />
                <RaisedButton label="Sign Up" secondary={true} />
              </div>
          </CardText>
          </Card>
        </div>
      );
    }
}


MaterialAppExampleProgress.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
