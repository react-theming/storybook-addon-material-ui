import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from './config';
import MuiDecorator from './UI/MuiDecorator';
import { createStore } from './adk/decorator';

const lightBaseTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});
const darkBaseTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
});

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

export function muiTheme(themes) {
  const store = createStore(
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    'iframe'
  );

  let themesInitList = [lightBaseTheme, darkBaseTheme];
  if (themes) {
    if (Array.isArray(themes)) {
      themesInitList = themes;
      themesInitList.forEach((val, ind) => {
        if (typeof val === 'string') {
          /* note: unsupported names goes as lightBaseTheme
          if (val === lightBaseTheme.themeName) {
              themesInitList[ind] = lightBaseTheme;
          }
          */
          if (val === darkBaseTheme.themeName) {
            themesInitList[ind] = darkBaseTheme;
          } else {
            themesInitList[ind] = lightBaseTheme;
          }
        }
      });
    } else {
      themesInitList = [themes];
    }
  }

  store.onConnected(() =>
    store.sendInit({ themes: themesInitList, themeInd: 0 })
  );

  return story => {
    const storyItem = story();
    return (
      <MuiDecorator
        story={storyItem}
        initData={{ themes: themesInitList, themeInd: 0 }}
      />
    );
  };
}
