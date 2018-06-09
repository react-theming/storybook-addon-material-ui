import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { orange500, blue500 } from '@material-ui/core/colors';

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
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="Login Page"
              />
              <Card>
                <TextField
                  hintText="Email Address"
                  errorText="This field is required"
                  hintStyle={styles.errorStyle}
                />
                <br />
                <br />
                <TextField
                  hintText="Password"
                  type="password"
                  errorText="This field is required"
                  hintStyle={styles.errorStyle}
                /><br />
                <div style={{justifyContent: 'center', display: 'flex'}}>
                  <Button variant="raised" label="Login" primary={true} />
                  <Button variant="raised" label="Sign Up" secondary={true} />
                </div>
              </Card>
            </Card>
          </div>
        );
    }
}


MaterialAppExampleProgress.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
