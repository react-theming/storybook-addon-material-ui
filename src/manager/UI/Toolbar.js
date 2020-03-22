import React from 'react';

import * as styled from './Toolbar.styled';

const Toolbar = ({ children }) => {
  return <styled.Container>{children}</styled.Container>;
};

export default Toolbar;
