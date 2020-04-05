import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';

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

const copyToClipboard = str => () => {
  const el = window.document.createElement('textarea');
  el.value = str;
  window.document.body.appendChild(el);
  el.select();
  window.document.execCommand('copy');
  window.document.body.removeChild(el);
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
      <styled.SelectedCard>
        {footerAction && (
          <styled.Copy
            title="copy to clipboard"
            onClick={copyToClipboard(footerAction)}
          />
        )}
        {footerAction}
      </styled.SelectedCard>
    </styled.Container>
  );
};

export default ThemeBrowser;
