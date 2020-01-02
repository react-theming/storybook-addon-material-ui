import React from 'react';
import { ChromePicker } from 'react-color';

import * as styled from './ThemeBrowser.styled';

const ColorDetails = ({ selectedValue, onChange }) => {
  if (!selectedValue) {
    return <styled.Container size={230}>Nothing selected</styled.Container>;
  }
  const { value, name, type } = selectedValue;

  const isColor = type === 'color';

  const handleChange = colorInfo => {
    const { hex } = colorInfo;
    onChange(hex);
  };

  return (
    <styled.Container size={230}>
      <h3>{name}</h3>
      {isColor && (
        <ChromePicker color={value} onChangeComplete={handleChange} />
      )}
    </styled.Container>
  );
};

export default ColorDetails;
