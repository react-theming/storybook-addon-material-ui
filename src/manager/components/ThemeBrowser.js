import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';

const ThemeBrowser = ({ theme, themeInfo, selectValue }) => (
  <styled.Container>
    <Toolbar>
      <Caption>{themeInfo.name}</Caption>
    </Toolbar>
    <styled.ThemeHolder>
      <ReactJson src={theme} onSelect={selectValue} name={null} />
    </styled.ThemeHolder>
  </styled.Container>
);

export default ThemeBrowser;
