import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

const paperStyle = {
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};
const signInButton = {
  width: 256,
  margin: 15
};
const toggle = {
  textAlign: 'left',
  width: 256,
  margin: 15
};
export default class MyTest extends React.Component {
    state = {
      logged: true,
    };

    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

    render() {
        return (
        <div
        style={{
            margin: '20px 100px',
            minWidth: 400,
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center',
        }}>
          <Paper style={paperStyle} zDepth={1} >
          <AppBar
            title="Welcome"
            showMenuIconButton={false}
          />
          <div>
            <TextField
              floatingLabelText="Email"
            />
            <br/>
            <TextField
              floatingLabelText="Password"
            />

            <Toggle
              label="Remember me"
              defaultToggled={true}
              onToggle={this.handleChange}
              labelPosition="right"
              style={toggle}
            />

            <RaisedButton label="Sign in" style={signInButton} primary={true}/>
            <br />
            <a href="#">Forgot password?</a>
            </div>
          </Paper>
        </div>
    );
    }
}
