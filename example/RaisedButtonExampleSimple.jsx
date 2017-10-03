import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { action } from '@storybook/addon-actions';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} onClick={action('onClick')} />
    <RaisedButton label="Primary" primary={true} style={style} onClick={action('onClick')} />
    <RaisedButton label="Secondary" secondary={true} style={style} onClick={action('onClick')} />
    <RaisedButton label="Disabled" disabled={true} style={style} onClick={action('onClick')} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} onClick={action('onClick')} />
  </div>
);

export default RaisedButtonExampleSimple;
