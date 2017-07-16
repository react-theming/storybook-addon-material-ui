import React from 'react';
import RaisedButton from 'material-ui/Button';
import { action } from '@storybook/addon-actions';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} onTouchTap={action('onTouchTap')} />
    <RaisedButton label="Primary" primary={true} style={style} onTouchTap={action('onTouchTap')} />
    <RaisedButton label="Secondary" secondary={true} style={style} onTouchTap={action('onTouchTap')} />
    <RaisedButton label="Disabled" disabled={true} style={style} onTouchTap={action('onTouchTap')} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} onTouchTap={action('onTouchTap')} />
  </div>
);

export default RaisedButtonExampleSimple;
