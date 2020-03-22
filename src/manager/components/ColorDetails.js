import React from 'react';
import { ChromePicker } from 'react-color';

import * as styled from './ColorDetails.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';

const ColorDetails = ({ selectedValue, onChange }) => {
  const { value, name, type } = selectedValue || {};

  const isColor = type === 'color';

  const handleChange = (colorInfo) => {
    const { hex } = colorInfo;
    onChange(hex);
  };

  return (
    <styled.Container size={250}>
      <Toolbar>
        <Caption>{name || 'Select color'}</Caption>
      </Toolbar>
      <styled.PickerHolder>
        {isColor && (
          <ChromePicker color={value} onChangeComplete={handleChange} />
        )}
      </styled.PickerHolder>
    </styled.Container>
  );
};

export default ColorDetails;
