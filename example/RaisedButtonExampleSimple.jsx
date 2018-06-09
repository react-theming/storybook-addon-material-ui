import React from 'react';
import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <Button variant="raised" label="Default" style={style} onTouchTap={action('onTouchTap')} />
    <Button variant="raised" label="Primary" primary={true} style={style} onTouchTap={action('onTouchTap')} />
    <Button variant="raised" label="Secondary" secondary={true} style={style} onTouchTap={action('onTouchTap')} />
    <Button variant="raised" label="Disabled" disabled={true} style={style} onTouchTap={action('onTouchTap')} />
    <br />
    <br />
    <Button variant="raised" label="Full width" fullWidth={true} onTouchTap={action('onTouchTap')} />
  </div>
);

export default RaisedButtonExampleSimple;
