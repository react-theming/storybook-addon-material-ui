import React from 'react';
import addons from '@storybook/addons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from './config';
import MuiTheme from './containers/MuiTheme';
import MuiDecorator from './UI/MuiDecorator';
import { createStore } from './adk/decorator';

const lightBaseTheme = createMuiTheme();
const darkBaseTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

const previewStyle = color => ({
  backgroundColor: color,
  width: '100%',
  height: '100%',
  minHeight: 600
});

export function muiTheme(themes) {
  /** note: muiTheme arguments
   *
   *  the agrument 'themes' should be:
   *     - muiThemes (array): array with muiThemes;
   *     - muiTheme (object): single muiTheme;
   *  muiTheme is a two nesting level object with new or overriding props
   *
   */

  const channel = addons.getChannel();
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

  const themesOverrideList = themesInitList.map(val => ({
    themeName: val.themeName,
    palette: {}
  }));
  const themesAppliedList = makeClone(themesInitList);
  themesAppliedList[0] = themeApply(themesInitList[0], themesOverrideList[0]);
  const themesRenderedList = themeListRender(themesAppliedList);

  /** note: theme arrays description
   *
   *    themesInitList - initial list of base and user themes
   *    themesOverrideList - list of overwritings made by user
   *    themesAppliedList - overrided list (union InitList and OverrideList) - will be shown to user
   *    themesRenderedList - overrided list - will be used in ThemeProvider (resolved all links)
   *
   */

  let storedState = {
    themeInd: 0,
    isSideBarOpen: false,
    isFullTheme: false,
    collapseList: {
      palette: true
    },
    currentThemeOverride: {}
  };

  const panelState = state => {
    const { themeInd, isSideBarOpen, currentThemeOverride } = state;
    return {
      themeInd,
      isSideBarOpen,
      currentThemeOverride,
      themesAppliedList,
      themesRenderedList
    };
  };

  const storeState = state => {
    storedState = state;
  };

  const onThemeOverride = themeInd => overTheme => {
    themesOverrideList[themeInd] = themeApply(
      themesOverrideList[themeInd],
      overTheme
    );
    themesAppliedList[themeInd] = themeApply(
      themesInitList[themeInd],
      themesOverrideList[themeInd]
    );
    return themesAppliedList;
  };

  // fixme: EVENT_ID_INIT (local gecorators?)
  store.onConnected(() =>
    store.sendInit({ themes: themesInitList, themeInd: 0 })
  );
  // channel.emit(EVENT_ID_INIT, panelState(storedState));

  return story => {
    const storyItem = story();
    return (
      <MuiDecorator
        story={storyItem}
        initData={{ themes: themesInitList, themeInd: 0 }}
      />
    );
    // return (
    //   <MuiTheme
    //     story={storyItem}
    //     themesInitList={themesInitList}
    //     themesAppliedListInit={themesAppliedList}
    //     themesRenderedList={themesRenderedList}
    //     onThemeOverride={onThemeOverride}
    //     initState={storedState}
    //     onChangeState={storeState}
    //     themeListRender={themeListRender}
    //     // channel={channel}
    //     store={store}
    //   />
    // );
  };
}

function themeApply(prevTheme, overTheme) {
  const newTheme = makeClone(prevTheme);
  const keys = Object.keys(overTheme);
  keys.forEach(val => {
    if (typeof overTheme[val] === 'object') {
      if (typeof newTheme[val] === 'undefined') {
        newTheme[val] = {};
      }

      const subKeys = Object.keys(overTheme[val]);
      // note: find out a number or a string
      subKeys.forEach(prop => {
        newTheme[val][prop] = tryParse(overTheme[val][prop]);
      });
    } else {
      newTheme[val] = overTheme[val];
    }
  });

  return newTheme;
}

function themeListRender(themesAppliedList) {
  const themesRenderedList = makeClone(themesAppliedList);
  return themesRenderedList;
}

function makeClone(obj) {
  // future: use immutable
  return JSON.parse(JSON.stringify(obj));
}

function tryParse(val) {
  return parseInt(val, 10) || val;
}
