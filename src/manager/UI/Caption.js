import React from 'react';
import * as styled from './Caption.styled';

const Caption = ({ children }) => {
  return <styled.Heading>{children}</styled.Heading>;
};

export default Caption;
