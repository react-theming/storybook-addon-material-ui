import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ThemeBrowser.styled';

const ThemeBrowser = ({ theme, selectValue }) => (
  <styled.Container>
    <h1>Current Theme</h1>
    <ReactJson src={theme} onSelect={selectValue} />
    <hr />
  </styled.Container>
);

export default ThemeBrowser;
