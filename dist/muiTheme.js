'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.muiTheme = muiTheme;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiTheme = require('./containers/MuiTheme');

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _ = require('./');

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo: addon for themes info

_lightBaseTheme2.default.themeName = 'Light Theme';
_darkBaseTheme2.default.themeName = 'Dark Theme';

function muiTheme(themes) {
    /*
     the agrument 'themes' could be:
    ommited - will be default lightBaseTheme;
    string: 'lightBaseTheme', 'darkBaseTheme';
    string: yourTheme should be a file yourTheme.js;
    string array: array with name of themes;
    muiTheme (object): object with muiTheme;
    muiThemes (array): array with muiThemes;
     */
    var channel = _storybookAddons2.default.getChannel();
    var themesInitList = [_lightBaseTheme2.default, _darkBaseTheme2.default];
    if (Array.isArray(themes)) {
        themesInitList = [].concat((0, _toConsumableArray3.default)(themesInitList), (0, _toConsumableArray3.default)(themes));
    } else {
        if (themes) {
            themesInitList = [].concat((0, _toConsumableArray3.default)(themesInitList), [themes]);
        }
    }
    var themesOverrideList = themesInitList.map(function (val) {
        return {
            themeName: val.themeName,
            palette: {}
        };
    });
    var themesAppliedList = makeClone(themesInitList);
    //    themesOverrideList[0].palette.accent1Color = 'green'; // debug
    themesAppliedList[0] = themeApply(themesInitList[0], themesOverrideList[0]);
    var themesRenderedList = themeListRender(themesAppliedList);
    //    console.log(themesAppliedList);

    /*
        themesInitList - initial list of base and user themes
        themesOverrideList - list of overwritings made by user
        themesAppliedList - overrided list (union InitList and OverrideList) - will be shown to user
        themesRenderedList - overrided list - will be used in ThemeProvider (resolved all links)
     */

    var storedState = {
        themeInd: 0,
        isSideBarOpen: true,
        isFullTheme: false,
        collapseList: {
            palette: true
        },

        currentThemeOverride: {}

    };
    var storeState = function storeState(state) {
        storedState = state;
        //        console.log(storedState)
    };

    var onThemeOverride = function onThemeOverride(themeInd) {
        return function (overTheme) {
            //            console.info('index')
            //            console.log(overTheme)
            themesOverrideList[themeInd] = themeApply(themesOverrideList[themeInd], overTheme);
            themesAppliedList[themeInd] = themeApply(themesInitList[themeInd], themesOverrideList[themeInd]);
            return themesAppliedList;
            //            themesRenderedList = themeListRender(themesAppliedList);
        };
    };

    var panelState = function panelState(state) {
        var themeInd = state.themeInd;
        var isSideBarOpen = state.isSideBarOpen;
        var currentThemeOverride = state.currentThemeOverride;

        return { themeInd: themeInd, isSideBarOpen: isSideBarOpen, currentThemeOverride: currentThemeOverride };
    };
    var initPanel = {
        themesAppliedList: themesAppliedList,
        themesRenderedList: themesRenderedList,
        panelState: panelState(storedState)
    };
    channel.emit(_.EVENT_ID_INIT, initPanel);

    return function (story) {
        return _react2.default.createElement(_MuiTheme.MuiTheme, {
            story: story,
            themesAppliedListInit: themesAppliedList,
            themesRenderedList: themesRenderedList,
            onThemeOverride: onThemeOverride,
            initState: storedState,
            onChangeState: storeState,
            themeListRender: themeListRender,
            channel: channel
        });
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
    var newTheme = makeClone(prevTheme);
    var keys = (0, _keys2.default)(overTheme);
    keys.forEach(function (val) {
        if ((0, _typeof3.default)(overTheme[val]) === 'object') {
            /* console.log('themeApply')
             console.log(val)
             console.log(newTheme[val])
             console.log(overTheme[val])*/

            if (typeof newTheme[val] === 'undefined') {
                newTheme[val] = {};
            }
            var subKeys = (0, _keys2.default)(overTheme[val]);
            subKeys.forEach(function (prop) {
                newTheme[val][prop] = tryParse(overTheme[val][prop]);
            });
        } else {
            newTheme[val] = overTheme[val];
        }
    });

    return newTheme;
}

function themeListRender(themesAppliedList) {
    var themesRenderedList = makeClone(themesAppliedList);
    return themesRenderedList;
}

function makeClone(obj) {
    return JSON.parse((0, _stringify2.default)(obj));
}

function tryParse(val) {
    return parseInt(val) || val;
}
