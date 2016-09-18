// todo: addon for themes info

import React from 'react';
import { MuiTheme } from './containers/MuiTheme';
import addons from '@kadira/storybook-addons';
import { EVENT_ID_INIT } from './';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';




lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

export function muiTheme(themes) {
    /*

    the agrument 'themes' could be:
    ommited - will be default lightBaseTheme;
    string: 'lightBaseTheme', 'darkBaseTheme';
    string: yourTheme should be a file yourTheme.js;
    string array: array with name of themes;
    muiTheme (object): object with muiTheme;
    muiThemes (array): array with muiThemes;

    */
    const channel = addons.getChannel();
    let themesInitList = [lightBaseTheme, darkBaseTheme];
    if (Array.isArray(themes)) {
        themesInitList = [...themesInitList, ...themes];
    } else {
        if (themes) {
            themesInitList = [...themesInitList, themes];
        }
    }
    let themesOverrideList = themesInitList.map(val => ({
        themeName: val.themeName,
        palette: {},
    }));
    let themesAppliedList = makeClone(themesInitList);
//    themesOverrideList[0].palette.accent1Color = 'green'; // debug
    themesAppliedList[0] = themeApply(themesInitList[0], themesOverrideList[0]);
    let themesRenderedList = themeListRender(themesAppliedList);
//    console.log(themesAppliedList);

    /*
        themesInitList - initial list of base and user themes
        themesOverrideList - list of overwritings made by user
        themesAppliedList - overrided list (union InitList and OverrideList) - will be shown to user
        themesRenderedList - overrided list - will be used in ThemeProvider (resolved all links)

    */

    let storedState = {
        themeInd: 0,
        isSideBarOpen: true,
        isFullTheme: false,
        collapseList: {
            palette: true,
        },

        currentThemeOverride: {},

    };
    let storeState = (state) => {
        storedState = state;
//        console.log(storedState)
    };

    let onThemeOverride = (themeInd) => {
        return (overTheme) => {
//            console.info('index')
//            console.log(overTheme)
            themesOverrideList[themeInd] = themeApply(themesOverrideList[themeInd], overTheme);
            themesAppliedList[themeInd] = themeApply(themesInitList[themeInd], themesOverrideList[themeInd]);
            return themesAppliedList;
//            themesRenderedList = themeListRender(themesAppliedList);
        }
    };


    const panelState = (state) => {
        const {themeInd, isSideBarOpen, currentThemeOverride} = state;
        return {themeInd, isSideBarOpen, currentThemeOverride};
    }
    const initPanel = {
        themesAppliedList,
        themesRenderedList,
        panelState: panelState(storedState),
    }
    channel.emit(EVENT_ID_INIT, initPanel);

    return (story) => {
        return (
            <MuiTheme
              story={story}
              themesAppliedListInit={themesAppliedList}
              themesRenderedList={themesRenderedList}
              onThemeOverride={onThemeOverride}
              initState={storedState}
              onChangeState={storeState}
              themeListRender={themeListRender}
              channel={channel}
            />);
    };
}

/*
    onChangeTheme= {(ind) => {defautThemeInd = ind;}}
    onOpenSideBar={(f) => {isSideBarOpen = f;}}
    isSideBarOpen={isSideBarOpen}
    defautThemeInd = {defautThemeInd}
*/


//export default muiTheme;

function themeApply(prevTheme, overTheme) {
    let newTheme = makeClone(prevTheme);
    const keys = Object.keys(overTheme);
    keys.forEach(val => {
        if (typeof(overTheme[val]) === 'object') {
           /* console.log('themeApply')
            console.log(val)
            console.log(newTheme[val])
            console.log(overTheme[val])*/

            if (typeof(newTheme[val]) === 'undefined') {
                newTheme[val] = {};
            }
            const subKeys = Object.keys(overTheme[val]);
            subKeys.forEach(prop => { newTheme[val][prop] = tryParse(overTheme[val][prop]); });
        } else {
            newTheme[val] = overTheme[val];
        }
    });

    return newTheme
}

function themeListRender(themesAppliedList) {
    let themesRenderedList = makeClone(themesAppliedList);
    return themesRenderedList
}

function makeClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function tryParse(val) {
    return parseInt(val) || val;
}
