import React from 'react';
import { MuiTheme } from './containers/MuiTheme';
import addons from '@kadira/storybook-addons';
import { EVENT_ID_INIT } from './';
import { EVENT_ID_DATA } from './';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

export function muiTheme(themes) {
    /*
    the agrument 'themes' should be:
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
    const themesOverrideList = themesInitList.map(val => ({
        themeName: val.themeName,
        palette: {},
    }));
    const themesAppliedList = makeClone(themesInitList);
    themesAppliedList[0] = themeApply(themesInitList[0], themesOverrideList[0]);
    const themesRenderedList = themeListRender(themesAppliedList);

/*
    themesInitList - initial list of base and user themes
    themesOverrideList - list of overwritings made by user
    themesAppliedList - overrided list (union InitList and OverrideList) - will be shown to user
    themesRenderedList - overrided list - will be used in ThemeProvider (resolved all links)
*/

    let storedState = {
        themeInd: 0,
        isSideBarOpen: false,
        isFullTheme: false,
        collapseList: {
            palette: true,
        },
        currentThemeOverride: {},
    };

    const storeState = (state, isNewData) => {
        storedState = state;
        const refreshPanel = {
            themesAppliedList,
            themesRenderedList,
            panelState: panelState(storedState),
        };
        //fixme: EVENT_ID_DATA
        if (!isNewData) channel.emit(EVENT_ID_DATA, refreshPanel);
    };

    const panelState = (state) => {
        const { themeInd, isSideBarOpen, currentThemeOverride } = state;
        return { themeInd, isSideBarOpen, currentThemeOverride };
    };

    const onThemeOverride = (themeInd) => {
        return (overTheme) => {
            themesOverrideList[themeInd] = themeApply(themesOverrideList[themeInd], overTheme);
            themesAppliedList[themeInd] = themeApply(themesInitList[themeInd], themesOverrideList[themeInd]);
            return themesAppliedList;
        };
    };

    const initPanel = {
        themesAppliedList,
        themesRenderedList,
        panelState: panelState(storedState),
    };
    //fixme: EVENT_ID_INIT (local gecorators?)
    channel.emit(EVENT_ID_INIT, initPanel);

    return (story) => {
        const storyItem = story();
        return (
            <MuiTheme
              story={storyItem}
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

function themeApply(prevTheme, overTheme) {
    const newTheme = makeClone(prevTheme);
    const keys = Object.keys(overTheme);
    keys.forEach((val) => {
        if (typeof (overTheme[val]) === 'object') {

            if (typeof (newTheme[val]) === 'undefined') {
                newTheme[val] = {};
            }

            const subKeys = Object.keys(overTheme[val]);
            subKeys.forEach((prop) => { newTheme[val][prop] = tryParse(overTheme[val][prop]); });
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
    //future: use immutable
    return JSON.parse(JSON.stringify(obj));
}

function tryParse(val) {
    return parseInt(val) || val;
}
