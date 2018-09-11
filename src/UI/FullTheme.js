import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
import { ObjectInspector } from 'react-inspector';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const sortObjectKeys = (a, b) => {
  if (a === 'themeName') return -2;
  if (b === 'themeName') return 2;
  if (a === 'palette') return -1;
  if (b === 'palette') return 1;
  return a.charCodeAt(0) - b.charCodeAt(0);
};

export default ({ theme }) => (
  <ObjectInspector
    expandLevel={1}
    expandPaths="$.palette"
    sortObjectKeys={sortObjectKeys}
    data={createMuiTheme(theme)}
  />
);
