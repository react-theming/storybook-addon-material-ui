import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import { copyToClipboard } from '../../utils/clipboard';

const showThemePath = selectedValue => {
  if (!selectedValue) return 'select value';
  try {
    const { namespace, name } = selectedValue;
    const path = namespace.join('.');
    const fullPath = `${path}.${name}`;
    const themeProp = `\${({ theme }) => theme.${fullPath}}`;
    return themeProp;
  } catch (err) {
    return 'try to select value';
  }
};

const ThemeBrowser = ({ theme, themeInfo, selectValue, selectedValue }) => {
  const footerAction = showThemePath(selectedValue);
  return (
    <styled.Container>
      <Toolbar>
        <Caption>{themeInfo.name}</Caption>
      </Toolbar>
      <styled.ThemeHolder>
        <ReactJson src={theme} onSelect={selectValue} name={null} />
      </styled.ThemeHolder>
      <Toolbar footer>
        {footerAction && (
          <IconButton
            icon="copy"
            title="copy to clipboard"
            onClick={copyToClipboard(footerAction)}
          />
        )}
        <Text>{footerAction}</Text>
      </Toolbar>
    </styled.Container>
  );
};

export default ThemeBrowser;
